import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformiconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'xl'} noOfLines={2}>
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
      <p></p>
    </Card>
  );
};

export default GameCard;
