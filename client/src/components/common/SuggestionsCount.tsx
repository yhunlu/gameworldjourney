import { Badge } from '@chakra-ui/react';

interface Props {
  count: number;
}

const SuggestionsCount = ({ count }: Props) => {
  const countColor =
    count > 500 ? 'green' : 500 > count && count > 400 ? 'blue' : 400 > count && count > 200 ? 'yellow' : 'red';

  return (
    <Badge
      colorScheme={countColor}
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'4px'}
    >
      {count}
    </Badge>
  );
};

export default SuggestionsCount;
