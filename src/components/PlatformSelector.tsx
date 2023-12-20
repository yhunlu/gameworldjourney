import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  // if (error) return <Text>{error}</Text>;
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
            onClick={() => onSelectPlatform(platform)}
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
