import { Box, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';

const GameDetailSkeleton = () => {
  return (
    // create game detail page in skeleton mode using chakra
    <Box padding="4">
      <VStack spacing="4">
        <Skeleton height="20px" width="100%" />
        <Skeleton height="300px" width="100%" />
        <SkeletonText noOfLines={5} spacing="4" width="100%" />
      </VStack>
    </Box>
  );
};

export default GameDetailSkeleton;
