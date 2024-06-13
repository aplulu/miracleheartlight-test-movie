import { useEffect, useState } from 'react';
import { VStack, Text } from '@kuma-ui/core';

export type CountdownProps = {
  countdownSec: number;
};

export const Countdown = ({ countdownSec }: CountdownProps) => {
  const [countdown, setCountdown] = useState(countdownSec ?? 10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <VStack
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize="4rem"
      >
        {countdown}
      </Text>
    </VStack>
  );
};
