import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logoColor from '../assets/gwj-high-resolution-logo-transparent.webp';
import logoWhite from '../assets/gwj-high-resolution-logo-white-transparent.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { colorMode } = useColorMode();

  const logoSwitch = colorMode === 'dark' ? logoWhite : logoColor;

  return (
    <HStack p={5}>
      <Link to="/">
        <Image src={logoSwitch} alt="logo" boxSize="60px" width={'auto'} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
