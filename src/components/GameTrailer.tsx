import useTrailers from '../hooks/useTrailers';

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const media = data?.results[0];
    if (!media) return null;

    return media ? (
        <video src={media.data.max} poster={media.preview} controls />
    ) : null;
};

export default GameTrailer;
