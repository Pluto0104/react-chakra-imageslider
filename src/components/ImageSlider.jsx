import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Box, Image, IconButton, HStack, Stack, Grid } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';

/*
  ChakrUI is a Component based UI library for building React application.

*/

function ImageSlider({ images, isHover }) {
  //  Defines a state variable currentIndex to keep track of the currently displayed image index. Initially, it's set to 0, indicating the first image in the array.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the currentIndex state to move to the previous or next image in the array.
  const goToPreviousImage = () => {
    // if current is end of left, the function does nothing.
    if (currentIndex < 0) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNextImage = () => {
    // if current is end of right, the function does nothing.
    if (currentIndex > images.length - 1) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  // Defines the styling for the image slider container. It uses CSS properties to create a sliding effect based on the currentIndex. The transform property is used to shift the container horizontally to reveal the current image.
  // const slideStyle = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   transition: 'transform 0.5s ease-in-out',
  //   transform: `translateX(-${currentIndex * 100}%)`, // Slide based on currentIndex
  // };

  return (
    <>
      {/* Main Container */}
      <Box
        // Hide the overflowing part of the images
        overflow="hidden"
        // The container has a fixed width  .
        width="100%"
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
          {images.map((imageUrl, index) => (
            // Inside each <Box>, an <Image> component is rendered. Each item has  100% size initially.
            <Box key={index} flex="0 0 100%">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
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
          <HStack justifyContent="flex-end">
            <IconButton variant="unstyled" icon={<StarIcon />} size={'sm'} />
          </HStack>

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
                    opacity={isHover ? 1 : 0}
                  />
                )}
              </Box>

              <Box>
                {currentIndex !== images.length - 1 && (
                  <IconButton
                    aria-label="Search database"
                    onClick={goToNextImage}
                    borderRadius={50}
                    size="sm"
                    icon={<ChevronRightIcon />}
                    opacity={isHover ? 1 : 0}
                  />
                )}
              </Box>
            </>
          </HStack>

          {/* state dots */}
          <HStack justifyContent="center" mb={2}>
            <Grid
              templateColumns={`repeat(${Math.min(5, images.length)}, 1fr)`}
              gap={1}
              overflow="hidden"
            >
              {/* {Array(Math.min(images.length, 5)) */}
              {[...Array(Math.min(5, images.length))].map((_, index) => (
                <Box
                  width="6px"
                  height="6px"
                  borderRadius="full"
                  background={index === currentIndex % 5 ? 'gray' : 'lightgray'}
                  key={index}
                ></Box>
              ))}
            </Grid>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}

export default ImageSlider;
