export type SceneEffectType =
  | 'default'
  | 'glitch'
  | 'ethereal'
  | 'dramatic'
  | 'mystical'
  | 'warm'
  | 'dark'
  | 'poetic';

const BASE_LOADING_TIMEOUT = 8000;
const MAX_LOADING_TIMEOUT = 14000;

export const getSceneLoadingTimeout = (sceneEffect: SceneEffectType) => {
  const multiplier = sceneEffect === 'mystical' ? 1.3 : sceneEffect === 'dramatic' ? 1.2 : 1;
  return Math.min(Math.round(BASE_LOADING_TIMEOUT * multiplier), MAX_LOADING_TIMEOUT);
};
