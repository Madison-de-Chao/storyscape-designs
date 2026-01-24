import { useState, useCallback, useEffect } from 'react';
import { useGameStore } from '@/stores/gameStore';
import type { Achievement } from '@/components/game/AchievementToast';

// 成就定義
const ACHIEVEMENTS: Achievement[] = [
  // 進度類
  { id: 'first_choice', title: '初心', description: '做出你的第一個選擇', icon: 'compass', rarity: 'common' },
  { id: 'five_choices', title: '探索者', description: '做出5個選擇', icon: 'eye', rarity: 'common' },
  { id: 'ten_choices', title: '求索者', description: '做出10個選擇', icon: 'book', rarity: 'rare' },
  { id: 'twenty_choices', title: '旅者', description: '做出20個選擇', icon: 'star', rarity: 'rare' },
  { id: 'all_choices', title: '完美主義者', description: '發現所有選擇點', icon: 'trophy', rarity: 'legendary' },
  
  // 弧度類
  { id: 'arc_rising', title: '曙光乍現', description: '弧度值首次提升', icon: 'sparkles', rarity: 'common' },
  { id: 'arc_100', title: '半途而歸', description: '弧度值降至100以下', icon: 'zap', rarity: 'rare' },
  { id: 'arc_50', title: '歸途可期', description: '弧度值降至50以下', icon: 'flame', rarity: 'epic' },
  { id: 'arc_zero', title: '弧度歸零', description: '完成弧度歸零', icon: 'trophy', rarity: 'legendary' },
  
  // 陰影類
  { id: 'shadow_embrace', title: '擁抱陰影', description: '陰影值首次增加', icon: 'heart', rarity: 'common' },
  { id: 'shadow_deep', title: '深淵凝視', description: '陰影值達到50', icon: 'eye', rarity: 'epic' },
  { id: 'shadow_master', title: '暗影主宰', description: '陰影值達到100', icon: 'shield', rarity: 'legendary' },
  
  // 章節類
  { id: 'meet_sushi', title: '東坡相遇', description: '遇見蘇軾', icon: 'book', rarity: 'common' },
  { id: 'meet_wangyangming', title: '龍場悟道', description: '遇見王陽明', icon: 'star', rarity: 'common' },
  { id: 'meet_libai', title: '詩仙對飲', description: '遇見李白', icon: 'sparkles', rarity: 'rare' },
  { id: 'meet_yi', title: '直面陰影', description: '與伊正式相遇', icon: 'heart', rarity: 'epic' },
  { id: 'complete_journey', title: '完整的旅程', description: '完成第一部故事', icon: 'trophy', rarity: 'legendary' },
];

// 從 localStorage 獲取已解鎖成就
const getUnlockedAchievements = (): string[] => {
  try {
    const stored = localStorage.getItem('lovable-achievements');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// 保存已解鎖成就到 localStorage
const saveUnlockedAchievements = (ids: string[]) => {
  localStorage.setItem('lovable-achievements', JSON.stringify(ids));
};

/**
 * 成就系統 Hook
 */
export const useAchievements = () => {
  const { getCurrentProgress } = useGameStore();
  const progress = getCurrentProgress();
  
  const [unlockedIds, setUnlockedIds] = useState<string[]>(getUnlockedAchievements);
  const [pendingAchievement, setPendingAchievement] = useState<Achievement | null>(null);
  const [prevChoicesCount, setPrevChoicesCount] = useState(0);
  const [prevArcValue, setPrevArcValue] = useState(180);
  const [prevShadowLevel, setPrevShadowLevel] = useState(0);

  // 解鎖成就
  const unlockAchievement = useCallback((id: string) => {
    if (unlockedIds.includes(id)) return;
    
    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (!achievement) return;
    
    const newUnlockedIds = [...unlockedIds, id];
    setUnlockedIds(newUnlockedIds);
    saveUnlockedAchievements(newUnlockedIds);
    setPendingAchievement(achievement);
  }, [unlockedIds]);

  // 關閉成就通知
  const dismissAchievement = useCallback(() => {
    setPendingAchievement(null);
  }, []);

  // 檢查成就條件
  useEffect(() => {
    const choicesCount = Object.keys(progress.choicesHistory).length;
    const arcValue = progress.arcValue;
    const shadowLevel = progress.shadowLevel;
    const currentNodeId = progress.currentNodeId;

    // 選擇類成就
    if (choicesCount >= 1 && choicesCount > prevChoicesCount) {
      unlockAchievement('first_choice');
    }
    if (choicesCount >= 5) unlockAchievement('five_choices');
    if (choicesCount >= 10) unlockAchievement('ten_choices');
    if (choicesCount >= 20) unlockAchievement('twenty_choices');
    if (choicesCount >= 44) unlockAchievement('all_choices');

    // 弧度類成就
    if (arcValue < prevArcValue && prevArcValue === 180) {
      unlockAchievement('arc_rising');
    }
    if (arcValue < 100) unlockAchievement('arc_100');
    if (arcValue < 50) unlockAchievement('arc_50');
    if (arcValue === 0) unlockAchievement('arc_zero');

    // 陰影類成就
    if (shadowLevel > prevShadowLevel && prevShadowLevel === 0) {
      unlockAchievement('shadow_embrace');
    }
    if (shadowLevel >= 50) unlockAchievement('shadow_deep');
    if (shadowLevel >= 100) unlockAchievement('shadow_master');

    // 章節類成就（根據節點 ID）
    if (currentNodeId.includes('ch3-') || currentNodeId.includes('chapter-3-') || currentNodeId.includes('chapter3-')) {
      unlockAchievement('meet_wangyangming');
    }
    if (currentNodeId.includes('ch4-') || currentNodeId.includes('ch5-') || currentNodeId.includes('chapter-4-') || currentNodeId.includes('chapter-5-')) {
      unlockAchievement('meet_sushi');
    }
    if (currentNodeId.includes('ch9-') || currentNodeId.includes('chapter-9-')) {
      unlockAchievement('meet_libai');
    }
    if (currentNodeId.includes('ch15-') || currentNodeId.includes('chapter-15-')) {
      unlockAchievement('meet_yi');
    }
    if (currentNodeId.includes('postscript-end') || currentNodeId.includes('epilogue-end')) {
      unlockAchievement('complete_journey');
    }

    // 更新前值
    setPrevChoicesCount(choicesCount);
    setPrevArcValue(arcValue);
    setPrevShadowLevel(shadowLevel);
  }, [progress, prevChoicesCount, prevArcValue, prevShadowLevel, unlockAchievement]);

  return {
    achievements: ACHIEVEMENTS,
    unlockedIds,
    unlockedCount: unlockedIds.length,
    totalCount: ACHIEVEMENTS.length,
    pendingAchievement,
    dismissAchievement,
    unlockAchievement,
  };
};

export default useAchievements;
