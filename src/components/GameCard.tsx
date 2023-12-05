import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

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
        {/* Platform icon list and critic score */}
        <HStack justifyContent={'space-between'} marginBottom={3}>
          {/* Platform icon list */}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          {/* Critic score */}
          <CriticScore score={game.metacritic} />
        </HStack>
        {/* Game name */}
        <Heading fontSize={'xl'}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
