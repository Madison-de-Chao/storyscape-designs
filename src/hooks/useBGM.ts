import { useEffect, useRef } from "react";

export const useBGM = (src: string, volume: number = 0.5) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0;

    const playAudio = async () => {
      try {
        await audio.play();
        const fadeIn = setInterval(() => {
          if (audio.volume < volume) {
            audio.volume = Math.min(audio.volume + 0.05, volume);
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      } catch {
        // Waiting for user interaction before playback is allowed
      }
    };

    playAudio();

    return () => {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 50);
    };
  }, [src, volume]);

  return audioRef;
};
