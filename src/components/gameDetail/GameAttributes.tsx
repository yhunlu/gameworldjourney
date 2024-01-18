import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game, Genre, Platform, Publisher } from '../../entities';
import { CriticScore, DefinitionItem, ReleaseDate } from '../common';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }: { platform: Platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre: Genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Released Date">
        <ReleaseDate date={game.released} />
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher: Publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
