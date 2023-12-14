import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Box, Image, IconButton, HStack, Stack, Grid } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
const IMAGES = ['https://bit.ly/2Z4KKcF', './1.png', './2.png'];
const ImageSingleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the currentIndex state to move to the previous or next image in the array.
  const goToPreviousImage = () => {
    // if current is end of left, the function does nothing.
    if (currentIndex < 0) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNextImage = () => {
    // if current is end of right, the function does nothing.
    if (currentIndex > IMAGES.length - 1) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  return (
    <Box width="400px" height="300px" margin="auto" marginY="120px">
      {/* Main Container */}
      <Box
        // Hide the overflowing part of the images
        // The container has a fixed width  .
        width="100%"
        height="100%"
        borderRadius="16px"
        // The position property in CSS is used to control the positioning of an element within its containing element. The element is positioned relative to its normal position
        position="relative"
      >
        {/* Image Slider Container */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`, // Slide based on currentIndex
          }}
        >
          {IMAGES.map((imageUrl, index) => (
            // Inside each <Box>, an <Image> component is rendered. Each item has  100% size initially.
            <Box key={index} flex="0 0 100%">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
                px={6}
                // backgroundSize="cover"
              />
            </Box>
          ))}
        </Box>

        <Stack
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          justifyContent="space-between"
          p={'16px 16px 0 16px'}
        >
          <HStack justifyContent="flex-end"></HStack>

          <HStack justifyContent="space-between">
            <>
              <Box>
                {/* The navigation button is available when navigation is possible. */}
                {currentIndex !== 0 && (
                  <IconButton
                    aria-label="Search database"
                    onClick={goToPreviousImage}
                    borderRadius={50}
                    size="sm"
                    icon={<ChevronLeftIcon />}
                  />
                )}
              </Box>

              <Box>
                {currentIndex !== IMAGES.length - 1 && (
                  <IconButton
                    aria-label="Search database"
                    onClick={goToNextImage}
                    borderRadius={50}
                    size="sm"
                    icon={<ChevronRightIcon />}
                  />
                )}
              </Box>
            </>
          </HStack>

          {/* state dots */}
          <HStack justifyContent="center" mb={2}>
            <Grid
              templateColumns={`repeat(${IMAGES.length}, 1fr)`}
              gap={1}
              overflow="hidden"
            >
              {/* {Array(Math.min(images.length, 5)) */}
              {[...Array(IMAGES.length)].map((_, index) => (
                <Box
                  width="6px"
                  height="6px"
                  borderRadius="full"
                  background={
                    index === currentIndex % IMAGES.length
                      ? 'gray'
                      : 'lightgray'
                  }
                  key={index}
                ></Box>
              ))}
            </Grid>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ImageSingleSlider;
