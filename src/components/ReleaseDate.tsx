import { Badge } from '@chakra-ui/react';

interface Props {
  date: string;
}

const ReleaseDate = ({ date }: Props) => {
  return (
    // show game release date
    <Badge
      marginY={1.5}
      marginBottom={3}
      colorScheme="brand"
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'4px'}
    >
      {date}
    </Badge>
  );
};

export default ReleaseDate;
