import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import { GenreSkeleton } from '.';
import { useGenres } from '../../hooks';
import useGameQueryStore from '../../store';
import { skeleton } from '../../utils';
import getCroppedImageUrl from '../../utils/image-url';

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginTop={5}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                fontSize={genre.id === selectedGenreId ? 'xl' : 'lg'}
                variant={'link'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
