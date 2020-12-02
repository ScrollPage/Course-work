import { IDetector } from '@/types/detector';
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export const Detector: React.FC<IDetector> = ({ x, y, id }) => {
  return (
    <Box
      bg="purple"
      p="4"
      w="230px"
      borderWidth={1}
      boxShadow="sm"
      borderRadius={6}
      m="2"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box mt="2">
          <Image src="/detector.svg" alt="Russia" width={70} height={70} />
        </Box>

        <Flex
          justifyContent="space-between"
          direction="column"
          alignItems="flex-start"
        >
          <Heading py="1" size="md">
            id: {id}
          </Heading>
          <Heading py="1" size="md">
            x: {x}
          </Heading>
          <Heading py="1" size="md">
            y: {y}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};
