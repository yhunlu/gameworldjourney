import { HStack, ListItem, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    // create genre list item in skeleton mode using chakra
    <ListItem paddingY="5px">
      <HStack>
        <SkeletonCircle size="10" />
        <Skeleton height="10px" width="150px" />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
