import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import GameDetailSkeleton from '../components/GameDetailSkeleton';
import { Heading, Text } from '@chakra-ui/react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <GameDetailSkeleton />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  )
};

export default GameDetailPage;
