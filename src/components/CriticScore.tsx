import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const scoreColor = score > 75 ? 'green' : score < 25 ? 'red' : 'yellow';

  return (
    <Badge
      colorScheme={scoreColor}
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'4px'}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
