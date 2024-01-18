import { HStack, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitch, SearchInput } from '.';
import { logoColor, logoWhite } from '../../assets';

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
