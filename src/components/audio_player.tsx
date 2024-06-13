import { useEffect, useRef } from 'react';

export type AudioPlayerProps = {
  src: string;
  autoPlay?: boolean;
  preload?: boolean;
  volume?: number;
};

export const AudioPlayer = ({ src, autoPlay = false, preload = false, volume = 1 }: AudioPlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (volume) {
      ref.current.volume = volume;
    }
  }, [volume]);

  return (
    <audio
      src={src}
      preload={preload ? 'true' : 'false'}
      autoPlay={autoPlay}
      ref={ref}
    >
      <source src={src} type="audio/mp3" />
    </audio>
  );
};
