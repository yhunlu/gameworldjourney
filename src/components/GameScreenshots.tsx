import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenshots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
            spacing={2}
            marginY={2}
        >
            {data?.results.map((screenshot) => (
                <Image
                    key={screenshot.id}
                    src={screenshot.image}
                    alt={screenshot.image}
                />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
