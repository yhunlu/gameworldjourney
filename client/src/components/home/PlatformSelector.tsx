import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { usePlatform, usePlatforms } from '../../hooks';
import { useGameQueryStore } from '../../store';

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            fontWeight={
              platform.id === selectedPlatform?.id ? 'bold' : 'normal'
            }
            fontSize={platform.id === selectedPlatform?.id ? 'lg' : 'md'}
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
            cursor="pointer"
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
