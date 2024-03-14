import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import ImageSingleSlider from './components/ImageSingleSlider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ImageSingleSlider />
    </ChakraProvider>
  );
}

export default App;
