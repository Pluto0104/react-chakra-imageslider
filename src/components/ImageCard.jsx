import React, { useState } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Text,
  Link,
} from '@chakra-ui/react';
import ImageSlider from './ImageSlider';
import { StarIcon } from '@chakra-ui/icons';

const ImageCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  // The destructure data to extracts various data properties
  const { id, imagesUrl, address, distance, duration, price, rating } = data;
  return (
    <>
      <Card
        variant="unstyled"
        gap={3}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* CardBody typically has padding  */}
        <CardBody p={0}>
          <ImageSlider images={imagesUrl} isHover={isHover} />
        </CardBody>
        <CardFooter flexDirection="column">
          <HStack justifyContent="space-between">
            <Text fontSize="14px" fontWeight={600}>
              {address}
            </Text>
            <HStack>
              <StarIcon />
              <Text fontSize="12px" fontWeight={400}>
                {rating}
              </Text>
            </HStack>
          </HStack>
          <Box>
            <Text fontSize="14px" fontWeight={400} color="grey">
              {distance}
            </Text>
            <Text fontSize="14px" fontWeight={400} color="grey">
              {duration}
            </Text>
          </Box>
          <Link
            textDecoration="underline"
            fontSize="14px"
            fontWeight={600}
            href="#"
          >
            {price}
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ImageCard;
