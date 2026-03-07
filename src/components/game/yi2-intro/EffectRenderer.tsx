import { forwardRef } from 'react';
import type { IntroStyle } from './types';
import {
  DigitalWakeEffect,
  FileDeleteEffect,
  MemoryGapEffect,
  MirrorCrackEffect,
  HotpotSteamEffect,
  HollywoodCurtainEffect,
  CliffDreamEffect,
  SearchScreenEffect,
  MirrorDialogueEffect,
  CherryFilterEffect,
  SpotlightStageEffect,
  EchoRippleEffect,
  ZeroCountdownEffect,
} from './effects';

const EffectRenderer = forwardRef<HTMLDivElement, { style: IntroStyle; color: string }>(({ style, color }, _ref) => {
  switch (style) {
    case 'digital-wake': return <DigitalWakeEffect color={color} />;
    case 'file-delete': return <FileDeleteEffect color={color} />;
    case 'memory-gap': return <MemoryGapEffect color={color} />;
    case 'mirror-crack': return <MirrorCrackEffect color={color} />;
    case 'hotpot-steam': return <HotpotSteamEffect color={color} />;
    case 'hollywood-curtain': return <HollywoodCurtainEffect color={color} />;
    case 'cliff-dream': return <CliffDreamEffect color={color} />;
    case 'search-screen': return <SearchScreenEffect color={color} />;
    case 'mirror-dialogue': return <MirrorDialogueEffect color={color} />;
    case 'cherry-filter': return <CherryFilterEffect color={color} />;
    case 'spotlight-stage': return <SpotlightStageEffect color={color} />;
    case 'echo-ripple': return <EchoRippleEffect color={color} />;
    case 'zero-countdown': return <ZeroCountdownEffect color={color} />;
    default: return null;
  }
});
EffectRenderer.displayName = 'EffectRenderer';

export default EffectRenderer;
