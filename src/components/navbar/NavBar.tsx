import { HStack, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitch, SearchInput } from '.';
import { logoColor, logoWhite } from '../../assets';
import useGameQueryStore from '../../store';

const NavBar = () => {
  const { colorMode } = useColorMode();

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const logoSwitch = colorMode === 'dark' ? logoWhite : logoColor;

  const clear_searchtext = () => {
    setSearchText('');
  }

  return (
    <HStack p={5}>
      <Link to="/" onClick={() => clear_searchtext()}>
        <Image src={logoSwitch} alt="logo" boxSize="60px" width={'auto'} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
