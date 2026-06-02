import { useState, useCallback, useEffect } from 'react';
import { useGameStore } from '@/stores/gameStore';
import type { Achievement } from '@/components/game/AchievementToast';

// ===== 第二部成就定義 =====
// 搞笑成就的 choice ID 前綴/列表
const FUNNY_CHOICE_IDS = [
  'yi2-ch0-8c', 'yi2-ch0-33c', 'yi2-ch0-50c',
  'yi2-ch1-7c', 'yi2-ch1-33c',
  'yi2-ch2-18c', 'yi2-ch3-8c',
  'yi2-ch4-8c', 'yi2-ch5-9c',
  'yi2-ch6-9c', 'yi2-ch7-12c',
  'yi2-ch8-9c', 'yi2-ch9-6c',
  'yi2-ch10-9c', 'yi2-ch11-9c',
  'yi2-ch12-7c',
];

const YI2_ACHIEVEMENTS: Achievement[] = [
  // ── 進度類 ──
  { id: 'yi2_first_choice', title: '第二步', description: '在第二部做出第一個選擇', icon: 'compass', rarity: 'common' },
  { id: 'yi2_ten_choices', title: '十字路口', description: '做出10個選擇', icon: 'eye', rarity: 'rare' },
  { id: 'yi2_twenty_choices', title: '抉擇者', description: '做出20個選擇', icon: 'book', rarity: 'rare' },
  { id: 'yi2_all_choices', title: '全知全能', description: '發現所有選擇點', icon: 'trophy', rarity: 'legendary' },

  // ── 弧度類 ──
  { id: 'yi2_arc_start', title: '重新啟程', description: '第二部弧度首次增加', icon: 'sparkles', rarity: 'common' },
  { id: 'yi2_arc_halfway', title: '半圓', description: '第二部弧度達到180°', icon: 'zap', rarity: 'rare' },
  { id: 'yi2_arc_almost', title: '將圓未圓', description: '第二部弧度達到300°', icon: 'flame', rarity: 'epic' },
  { id: 'yi2_arc_complete', title: '再次圓滿', description: '第二部弧度達到360°', icon: 'trophy', rarity: 'legendary' },

  // ── 陰影類 ──
  { id: 'yi2_shadow_touch', title: '暗影初觸', description: '第二部陰影值首次增加', icon: 'heart', rarity: 'common' },
  { id: 'yi2_shadow_fifty', title: '半影', description: '第二部陰影值達到50', icon: 'eye', rarity: 'epic' },

  // ── 章節/劇情類 ──
  { id: 'yi2_mirror_scene', title: '鏡中人', description: '第一次看見鏡中的異常', icon: 'eye', rarity: 'common' },
  { id: 'yi2_meet_yi', title: '妳好，伊', description: '與伊正式對話', icon: 'heart', rarity: 'rare' },
  { id: 'yi2_meet_monroe', title: '瑪麗蓮', description: '聽見夢露的故事', icon: 'star', rarity: 'rare' },
  { id: 'yi2_meet_vangogh', title: '星夜', description: '遇見梵谷的故事', icon: 'sparkles', rarity: 'rare' },
  { id: 'yi2_dad_message', title: '遲來的擁抱', description: '收到爸爸的訊息', icon: 'heart', rarity: 'epic' },
  { id: 'yi2_complete', title: '元壹境', description: '完成第二部故事', icon: 'trophy', rarity: 'legendary' },

  // ── 搞笑/惡搞類 ──
  { id: 'yi2_funny_first', title: '不正經', description: '第一次選了搞笑選項', icon: 'sparkles', rarity: 'common' },
  { id: 'yi2_funny_five', title: '吐槽大師', description: '選了5個搞笑選項', icon: 'zap', rarity: 'rare' },
  { id: 'yi2_funny_ten', title: '職業諧星', description: '選了10個搞笑選項', icon: 'flame', rarity: 'epic' },
  { id: 'yi2_funny_all', title: '全場最搞笑的人', description: '選了所有搞笑選項', icon: 'trophy', rarity: 'legendary' },
  { id: 'yi2_hungry', title: '肚子好餓', description: '在嚴肅場景選了想吃東西', icon: 'heart', rarity: 'rare' },
  { id: 'yi2_go_home', title: '我想回家', description: '在關鍵時刻選了想回家', icon: 'compass', rarity: 'rare' },
  { id: 'yi2_fourth_wall', title: '等等，這是遊戲？', description: '打破了第四面牆', icon: 'shield', rarity: 'epic' },
  { id: 'yi2_snooze', title: '賴床冠軍', description: '鬧鐘響了三次都不想起來', icon: 'star', rarity: 'common' },
  { id: 'yi2_sass_mirror', title: '嘴硬女王', description: '對鏡中的自己吐槽', icon: 'flame', rarity: 'rare' },
];

// localStorage key
const STORAGE_KEY = 'lovable-yi2-achievements';

const getUnlockedIds = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveUnlockedIds = (ids: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

/**
 * 第二部獨立成就系統
 */
export const useYi2Achievements = () => {
  const { yiPart2Progress, currentPart } = useGameStore();
  const progress = yiPart2Progress;
  // 僅在第二部進行中時追蹤
  const isActive = currentPart === 'yi-part2';

  const [unlockedIds, setUnlockedIds] = useState<string[]>(getUnlockedIds);
  const [pendingAchievement, setPendingAchievement] = useState<Achievement | null>(null);
  const [prevChoicesCount, setPrevChoicesCount] = useState(0);
  const [prevArcValue, setPrevArcValue] = useState(0);
  const [prevShadowLevel, setPrevShadowLevel] = useState(0);

  const unlockAchievement = useCallback((id: string) => {
    if (unlockedIds.includes(id)) return;
    const achievement = YI2_ACHIEVEMENTS.find(a => a.id === id);
    if (!achievement) return;
    const newIds = [...unlockedIds, id];
    setUnlockedIds(newIds);
    saveUnlockedIds(newIds);
    setPendingAchievement(achievement);
  }, [unlockedIds]);

  const dismissAchievement = useCallback(() => {
    setPendingAchievement(null);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    if (!progress) return;

    const choicesHistory = progress.choicesHistory || {};
    const choicesCount = Object.keys(choicesHistory).length;
    const choiceValues = Object.values(choicesHistory);
    const arcValue = progress.arcValue || 0;
    const shadowLevel = progress.shadowLevel || 0;
    const currentNodeId = progress.currentNodeId || '';

    // ── 進度類 ──
    if (choicesCount >= 1 && choicesCount > prevChoicesCount) {
      unlockAchievement('yi2_first_choice');
    }
    if (choicesCount >= 10) unlockAchievement('yi2_ten_choices');
    if (choicesCount >= 20) unlockAchievement('yi2_twenty_choices');
    if (choicesCount >= 50) unlockAchievement('yi2_all_choices');

    // ── 弧度類 ──
    if (arcValue > 0 && prevArcValue === 0) unlockAchievement('yi2_arc_start');
    if (arcValue >= 180) unlockAchievement('yi2_arc_halfway');
    if (arcValue >= 300) unlockAchievement('yi2_arc_almost');
    if (arcValue >= 360) unlockAchievement('yi2_arc_complete');

    // ── 陰影類 ──
    if (shadowLevel > prevShadowLevel && prevShadowLevel === 0) unlockAchievement('yi2_shadow_touch');
    if (shadowLevel >= 50) unlockAchievement('yi2_shadow_fifty');

    // ── 搞笑成就 ──
    const funnyCount = choiceValues.filter(v => FUNNY_CHOICE_IDS.includes(v)).length;
    if (funnyCount >= 1) unlockAchievement('yi2_funny_first');
    if (funnyCount >= 5) unlockAchievement('yi2_funny_five');
    if (funnyCount >= 10) unlockAchievement('yi2_funny_ten');
    if (funnyCount >= FUNNY_CHOICE_IDS.length) unlockAchievement('yi2_funny_all');

    // 特定搞笑成就
    if (choiceValues.includes('yi2-ch0-8c')) unlockAchievement('yi2_snooze');
    if (choiceValues.includes('yi2-ch0-33c') || choiceValues.includes('yi2-ch5-9c')) unlockAchievement('yi2_hungry');
    if (choiceValues.includes('yi2-ch0-50c') || choiceValues.includes('yi2-ch9-6c')) unlockAchievement('yi2_go_home');
    if (choiceValues.includes('yi2-ch12-7c')) unlockAchievement('yi2_fourth_wall');
    if (choiceValues.includes('yi2-ch2-18c') || choiceValues.includes('yi2-ch3-8c')) unlockAchievement('yi2_sass_mirror');

    // ── 章節類 ──
    if (currentNodeId.startsWith('yi2-ch2-')) unlockAchievement('yi2_mirror_scene');
    if (currentNodeId.startsWith('yi2-ch4-') || currentNodeId.startsWith('yi2-ch5-') || currentNodeId.startsWith('yi2-ch6-')) {
      unlockAchievement('yi2_meet_yi');
    }
    if (currentNodeId.startsWith('yi2-ch5-')) unlockAchievement('yi2_meet_monroe');
    if (currentNodeId.startsWith('yi2-ch6-')) unlockAchievement('yi2_meet_vangogh');
    if (currentNodeId.startsWith('yi2-ch11-1')) unlockAchievement('yi2_dad_message');
    if (currentNodeId.includes('yi2-ch12-') && (currentNodeId.includes('end') || currentNodeId.includes('final'))) {
      unlockAchievement('yi2_complete');
    }

    setPrevChoicesCount(choicesCount);
    setPrevArcValue(arcValue);
    setPrevShadowLevel(shadowLevel);
  }, [progress, prevChoicesCount, prevArcValue, prevShadowLevel, unlockAchievement]);

  return {
    achievements: YI2_ACHIEVEMENTS,
    unlockedIds,
    unlockedCount: unlockedIds.length,
    totalCount: YI2_ACHIEVEMENTS.length,
    pendingAchievement,
    dismissAchievement,
    unlockAchievement,
  };
};

export default useYi2Achievements;
