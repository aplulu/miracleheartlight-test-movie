import { useEffect } from 'react';
import { VStack, Text } from '@kuma-ui/core';

import { signalTypes } from '../lib/signal_types';
import { LightColorPreview } from './light_color_preview';
import { playSignal } from '../lib/signal_player';

export type SignalProps = {
  signalId: number;
};

export const Signal = ({ signalId }: SignalProps) => {
  const signal = signalTypes.find((signal) => signal.id === signalId);

  useEffect(() => {
    if (!signal) {
      return;
    }
    playSignal(signal.id);
  }, [signal]);

  if (!signal) {
    return null;
  }

  return (
    <VStack
      flexGrow="1"
      position="relative"
    >
      <VStack
        position="absolute"
        left="32px"
        bottom="32px"
      >
        <Text
          fontSize="4rem"
        >
          {signal.name}
        </Text>

        <LightColorPreview color={signal.name} />
      </VStack>

    </VStack>
  );
}
