import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExpandableText, GameAttributes, GameDetailSkeleton, GameScreenshots, GameTrailer } from '../components/gameDetail';
import { useGame } from '../hooks';


const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <GameDetailSkeleton />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
