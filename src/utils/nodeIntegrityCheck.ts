// 節點完整性檢查工具
import type { DialogueNode } from '@/stores/gameStore';

export interface BrokenLink {
  nodeId: string;
  brokenNextNodeId: string;
  speaker: string;
  textPreview: string;
}

export interface ChoiceBrokenLink {
  nodeId: string;
  choiceId: string;
  choiceText: string;
  brokenNextNodeId: string;
}

export interface IntegrityReport {
  totalNodes: number;
  brokenLinks: BrokenLink[];
  brokenChoiceLinks: ChoiceBrokenLink[];
  isValid: boolean;
}

/**
 * 掃描所有節點，找出指向不存在節點的 nextNodeId
 */
export function checkNodeIntegrity(nodes: DialogueNode[]): IntegrityReport {
  // 建立所有有效節點 ID 的集合
  const validNodeIds = new Set(nodes.map(node => node.id));
  
  const brokenLinks: BrokenLink[] = [];
  const brokenChoiceLinks: ChoiceBrokenLink[] = [];

  for (const node of nodes) {
    // 檢查主要的 nextNodeId
    if (node.nextNodeId && !validNodeIds.has(node.nextNodeId)) {
      brokenLinks.push({
        nodeId: node.id,
        brokenNextNodeId: node.nextNodeId,
        speaker: node.speaker,
        textPreview: node.text.substring(0, 50) + (node.text.length > 50 ? '...' : ''),
      });
    }

    // 檢查選項中的 nextNodeId
    if (node.choices) {
      for (const choice of node.choices) {
        if (choice.nextNodeId && !validNodeIds.has(choice.nextNodeId)) {
          brokenChoiceLinks.push({
            nodeId: node.id,
            choiceId: choice.id,
            choiceText: choice.text,
            brokenNextNodeId: choice.nextNodeId,
          });
        }
      }
    }
  }

  return {
    totalNodes: nodes.length,
    brokenLinks,
    brokenChoiceLinks,
    isValid: brokenLinks.length === 0 && brokenChoiceLinks.length === 0,
  };
}

/**
 * 格式化報告為可讀字串
 */
export function formatIntegrityReport(report: IntegrityReport): string {
  if (report.isValid) {
    return `✅ 節點完整性檢查通過！共 ${report.totalNodes} 個節點，無斷裂連結。`;
  }

  let output = `❌ 發現 ${report.brokenLinks.length + report.brokenChoiceLinks.length} 個斷裂連結：\n\n`;

  if (report.brokenLinks.length > 0) {
    output += `【主線斷裂】\n`;
    for (const link of report.brokenLinks) {
      output += `• ${link.nodeId} → "${link.brokenNextNodeId}" (不存在)\n`;
      output += `  說話者: ${link.speaker}, 內容: ${link.textPreview}\n\n`;
    }
  }

  if (report.brokenChoiceLinks.length > 0) {
    output += `【選項斷裂】\n`;
    for (const link of report.brokenChoiceLinks) {
      output += `• ${link.nodeId} 選項 "${link.choiceText}" → "${link.brokenNextNodeId}" (不存在)\n`;
    }
  }

  return output;
}
