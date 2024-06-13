import { VStack } from '@kuma-ui/core';

import { TimelinePlayer } from './components/timeline_player';


function App() {
  return (
    <VStack
      minHeight="100vh"
    >
      <VStack
        as="main"
        flexGrow="1"
        textShadow="0 0 2px rgba(222,222,222,0.9)"
      >
        <TimelinePlayer />
      </VStack>
    </VStack>
  );
}

export default App;
