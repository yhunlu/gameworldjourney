import { HStack, Image, Text } from '@chakra-ui/react';
import logoColor from '../assets/gwj-high-resolution-logo-transparent.webp';
import logoWhite from '../assets/gwj-high-resolution-logo-white-transparent.webp';
import theme from '../theme';

const NavBar = () => {
  return (
    <HStack>
      {/* check if it is dark mode change logo in image */}
      <Image
        src={theme.config.initialColorMode === 'dark' ? logoWhite : logoColor}
        alt="logo"
        boxSize="60px"
        width={'auto'}
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
