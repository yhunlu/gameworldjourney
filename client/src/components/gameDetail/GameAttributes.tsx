import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game, Genre, Platform, Publisher, Store } from '../../entities';
import {
  CriticScore,
  DefinitionItem,
  RatingScore,
  ReleaseDate,
  SuggestionsCount,
} from '../common';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }} as="dl">
      {game.released! && (
        <DefinitionItem term="Released Date">
          <ReleaseDate date={game.released} />
        </DefinitionItem>
      )}
      {game.rating! > 0 && game.rating_top! > 0 && (
        <DefinitionItem term="Rating">
          <RatingScore rating={game.rating} ratingTop={game.rating_top} />
        </DefinitionItem>
      )}
      {game.metacritic! && (
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      )}
      {game.suggestions_count! > 0 && (
        <DefinitionItem term="Suggestions">
          <SuggestionsCount count={game.suggestions_count} />
        </DefinitionItem>
      )}
      {game.parent_platforms! && (
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(
            ({ platform }: { platform: Platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            )
          )}
        </DefinitionItem>
      )}
      {game.genres! && (
        <DefinitionItem term="Genres">
          {game.genres.map((genre: Genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.publishers! && (
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher: Publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.stores! && (
        <DefinitionItem term="Stores">
          {game.stores?.map(({ store }: { store: Store }) => (
            <Text key={store.id}>{store.name}</Text>
          ))}
        </DefinitionItem>
      )}
    </SimpleGrid>
  );
};

export default GameAttributes;
