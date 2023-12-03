import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Price: Low to High</MenuItem>
        <MenuItem>Price: High to Low</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
