import { Box, Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../../entities';
import getCroppedImageUrl from '../../utils/image-url';
import {
  CriticScore,
  Emoji,
  PlatformIconList,
  RatingScore,
  ReleaseDate,
} from '../common';

interface Props {
  game: Game;
}

/**
 * Render a card component for a game.
 *
 * @param game - The game object.
 * @returns The rendered card component.
 */
const GameCard = ({ game }: Props) => {
  return (
    // Card component
    <Card>
      {/* Image component */}
      <Image src={getCroppedImageUrl(game.background_image)} />

      {/* Card body */}
      <CardBody>
        <ReleaseDate date={game.released} />
        {/* Platform icon list and critic score */}
        <HStack justifyContent={'space-between'} marginBottom={3}>
          {/* Platform icon list */}
          <PlatformIconList
            // cannot use map if parent_platforms is undefined
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />

          {/* Critic score */}
          <CriticScore score={game.metacritic} />
        </HStack>
        {/* Game name */}
        <Heading fontSize={'xl'}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Box marginTop={1}>
            <RatingScore rating={game.rating} ratingTop={game.rating_top} />
            <Emoji rating={game.rating_top} />
          </Box>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
