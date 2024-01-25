import { Box, useToken } from '@chakra-ui/react';

interface RatingProps {
    rating: number;
    ratingTop: number;
}

const RatingScore = ({ rating, ratingTop }: RatingProps) => {
    const [goldColor] = useToken('colors', ['brand.500']);
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= ratingTop; i++) {
            if (i <= rating) {
                stars.push(
                    <Box as="span" key={i} color={goldColor} fontSize="20px">
                        ★
                    </Box>
                );
            } else {
                stars.push(
                    <Box as="span" key={i} color="brand.200" fontSize="20px">
                        ★
                    </Box>
                );
            }
        }
        return stars;
    };

    return (
        <Box>
            <Box display="flex">{renderStars()}</Box>
        </Box>
    );
};

export default RatingScore;
