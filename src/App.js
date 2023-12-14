import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { Logo } from './Logo';

import ImageCard from './components/ImageCard';
import Images from './components/Images';
import ImageSingleSlider from './components/ImageSingleSlider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Images /> */}
      <ImageSingleSlider />
    </ChakraProvider>
  );
}

export default App;
