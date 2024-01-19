import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { useTag, useTags } from '../../hooks';
import useGameQueryStore from '../../store';

const TagSelector = () => {
    const { data } = useTags();
    const setSelectedTagId = useGameQueryStore((s) => s.setTagId);

    const selectedTagId = useGameQueryStore((s) => s.gameQuery.tagId);
    const selectedTag = useTag(selectedTagId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedTag?.name || 'Tags'}
            </MenuButton>
            <MenuList>
                {data?.results.map((tag) => (
                    <MenuItem
                        fontWeight={tag.id === selectedTag?.id ? 'bold' : 'normal'}
                        fontSize={tag.id === selectedTag?.id ? 'lg' : 'md'}
                        onClick={() => setSelectedTagId(tag.id)}
                        key={tag.id}
                        cursor="pointer"
                    >
                        {tag.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default TagSelector;
