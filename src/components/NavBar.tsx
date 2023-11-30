import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logoColor from '../assets/gwj-high-resolution-logo-transparent.webp';
import logoWhite from '../assets/gwj-high-resolution-logo-white-transparent.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  const { colorMode } = useColorMode();

  const logoSwitch = colorMode === 'dark' ? logoWhite : logoColor;

  return (
    <HStack justifyContent={'space-between'} p={5}>
      <Image src={logoSwitch} alt="logo" boxSize="60px" width={'auto'} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
