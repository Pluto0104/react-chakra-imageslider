import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import ImageCard from './ImageCard';

import { imagesData } from '../mock';

const Images = () => {
  return (
    <>
      <Grid
        gap={8}
        templateColumns={{
          base: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr ',
          lg: '1fr 1fr 1fr',
          xl: '1fr 1fr 1fr 1fr',
        }}
        mt="16px"
        mb="48px"
        px="40px"
      >
        {imagesData.map(data => (
          <GridItem>
            <ImageCard key={data.id} data={data} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Images;
