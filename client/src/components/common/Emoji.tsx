import { Image, ImageProps } from '@chakra-ui/react';
import { meh, thumbsUp, bullsEye } from '../../assets';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: ImageProps } = {
    '3': { src: meh, alt: 'meh', boxSize: '25px' },
    '4': { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    '5': { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
