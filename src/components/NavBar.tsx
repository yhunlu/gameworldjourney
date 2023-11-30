import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/gwj-high-resolution-logo-transparent.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize='60px' width={'auto'}/>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
