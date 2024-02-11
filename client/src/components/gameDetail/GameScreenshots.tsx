import {
    Box,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    SimpleGrid,
} from '@chakra-ui/react';
import { useScreenshots } from '../../hooks';
import { useState } from 'react';

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const [selectedImage, setSelectedImage] = useState('');

    const { data, error, isLoading } = useScreenshots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2} marginY={2}>
                {data?.results.map((screenshot) => (
                    <Box
                        key={screenshot.id}
                        as="button"
                        onClick={() => setSelectedImage(screenshot.image)}
                        cursor="pointer"
                        borderWidth="1px"
                        borderRadius="md"
                        overflow="hidden"
                        _hover={{ opacity: 0.8 }}
                    >
                        <Image src={screenshot.image} alt={screenshot.image} />
                    </Box>
                ))}

                <Modal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage('')}
                    size="6xl"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody padding="0" overflow="hidden" position="relative">
                            <Image
                                src={selectedImage}
                                alt={selectedImage}
                                width="100%"
                                height="100%"
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </SimpleGrid>
        </>
    );
};

export default GameScreenshots;