import { Heading } from '@chakra-ui/react';
import { useGenre, usePlatform, useStore, useTag } from '../../hooks';
import useGameQueryStore from '../../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const tagId = useGameQueryStore((s) => s.gameQuery.tagId);
  const tag = useTag(tagId);

  const storeId = useGameQueryStore((s) => s.gameQuery.storeId)
  const store = useStore(storeId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} ${tag?.name || ''} ${store?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="3xl" mb={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
