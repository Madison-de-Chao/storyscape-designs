// 說話者配置系統 - 統一管理角色的名稱、顏色和樣式
import type { DialogueNode } from '@/stores/gameStore';

// 說話者類型定義
export type SpeakerType = 
  | 'narrator' | 'protagonist' | 'yi' | 'wenxin' | 'wendu' | 'mentor'
  | 'wangyangming' | 'sushi' | 'simaqian' | 'wuzetian' | 'libai'
  | 'mandela' | 'caesar' | 'cleopatra' | 'lincoln' | 'jobs' | 'vangogh' | 'helenkeller';

// 說話者名稱映射
export const speakerNames: Record<SpeakerType, string> = {
  narrator: '',
  protagonist: '她', // 第一部用「她」，第二部會覆蓋為「你」
  yi: '???',
  wenxin: '問心',
  wendu: '問渡',
  mentor: '歸者',
  wangyangming: '王陽明',
  sushi: '蘇軾',
  simaqian: '司馬遷',
  wuzetian: '武則天',
  libai: '李白',
  mandela: '曼德拉',
  caesar: '凱薩',
  cleopatra: '克麗奧佩特拉',
  lincoln: '林肯',
  jobs: '賈伯斯',
  vangogh: '梵谷',
  helenkeller: '海倫·凱勒',
};

// 說話者顏色配置（用於名稱標籤）
export const speakerColors: Record<string, string> = {
  yi: 'text-accent',
  protagonist: 'text-primary',
  mentor: 'text-zen-gold',
  wenxin: 'text-zen-gold',
  wendu: 'text-zen-gold',
  wangyangming: 'text-amber-200',
  sushi: 'text-amber-200',
  simaqian: 'text-amber-200',
  libai: 'text-amber-200',
  wuzetian: 'text-rose-200',
  cleopatra: 'text-rose-200',
  mandela: 'text-teal-200',
  caesar: 'text-slate-200',
  vangogh: 'text-amber-300',
  helenkeller: 'text-teal-200',
  lincoln: 'text-teal-200',
  default: 'text-muted-foreground',
};

// 說話者文字樣式
export interface TextStyle {
  color: string;
  textShadow: string;
  fontStyle?: 'italic' | 'normal';
}

export const getSpeakerTextStyle = (speaker: string): TextStyle => {
  switch (speaker) {
    case 'yi':
      return {
        color: 'hsl(350 55% 72%)',
        textShadow: '0 0 8px hsl(350 60% 50% / 0.6), 0 1px 3px hsl(0 0% 0% / 0.9)',
        fontStyle: 'italic',
      };
    case 'wenxin':
      return {
        color: 'hsl(38 85% 75%)',
        textShadow: '0 0 15px hsl(38 80% 55% / 0.5), 0 0 30px hsl(38 80% 55% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'wendu':
      return {
        color: 'hsl(210 60% 75%)',
        textShadow: '0 0 12px hsl(210 70% 60% / 0.4), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'wangyangming':
    case 'sushi':
    case 'simaqian':
    case 'libai':
      return {
        color: 'hsl(45 50% 85%)',
        textShadow: '0 0 10px hsl(45 60% 60% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'wuzetian':
    case 'cleopatra':
      return {
        color: 'hsl(350 60% 78%)',
        textShadow: '0 0 12px hsl(350 70% 50% / 0.4), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'mandela':
    case 'lincoln':
    case 'helenkeller':
      return {
        color: 'hsl(180 40% 80%)',
        textShadow: '0 0 10px hsl(180 50% 60% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'vangogh':
      return {
        color: 'hsl(35 80% 70%)',
        textShadow: '0 0 15px hsl(35 90% 50% / 0.5), 0 0 25px hsl(280 60% 50% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'caesar':
      return {
        color: 'hsl(220 30% 80%)',
        textShadow: '0 0 10px hsl(220 40% 60% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    case 'narrator':
      return {
        color: 'hsl(220 20% 72%)',
        textShadow: '0 1px 3px hsl(0 0% 0% / 0.9)',
      };
    default:
      return {
        color: 'hsl(45 35% 92%)',
        textShadow: '0 1px 3px hsl(0 0% 0% / 0.9), 0 0 1px hsl(0 0% 0% / 0.6)',
      };
  }
};

// 強調文字的樣式
export const getEmphasisStyle = (speaker: string) => {
  switch (speaker) {
    case 'yi':
      return {
        color: 'hsl(350 70% 65%)',
        fontWeight: 700,
        textShadow: '0 0 15px hsl(350 80% 50% / 0.8), 0 0 30px hsl(350 80% 50% / 0.4)',
      };
    case 'wenxin':
      return {
        color: 'hsl(38 90% 65%)',
        fontWeight: 700,
        textShadow: '0 0 20px hsl(38 90% 55% / 0.8), 0 0 40px hsl(38 90% 55% / 0.4)',
      };
    case 'vangogh':
      return {
        color: 'hsl(35 100% 60%)',
        fontWeight: 700,
        textShadow: '0 0 20px hsl(35 100% 50% / 0.8), 0 0 35px hsl(280 70% 50% / 0.5)',
      };
    default:
      return {
        color: 'hsl(38 80% 70%)',
        fontWeight: 700,
        textShadow: '0 0 12px hsl(38 80% 55% / 0.6), 0 0 25px hsl(38 80% 55% / 0.3)',
      };
  }
};

// 獲取說話者名稱（支援自定義 speakerName）
export const getSpeakerDisplayName = (node: DialogueNode, currentPart: 'yi' | 'yi-part2'): string => {
  if (node.speakerName) return node.speakerName;
  
  const speaker = node.speaker as SpeakerType;
  
  // 主角在不同部分有不同稱呼
  if (speaker === 'protagonist') {
    return currentPart === 'yi' ? '她' : '你';
  }
  
  return speakerNames[speaker] || '';
};

// 獲取說話者顏色類別
export const getSpeakerColorClass = (speaker: string, currentPart: 'yi' | 'yi-part2'): string => {
  if (speaker === 'protagonist') {
    return currentPart === 'yi' ? 'text-primary' : 'text-accent';
  }
  return speakerColors[speaker] || speakerColors.default;
};
