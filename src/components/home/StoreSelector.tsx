import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { useStore, useStores } from '../../hooks';
import useGameQueryStore from '../../store';

const StoreSelector = () => {
    const { data } = useStores();
    const setSelectedStoreId = useGameQueryStore((s) => s.setStoreId);

    const selectedStoreId = useGameQueryStore((s) => s.gameQuery.storeId);
    const selectedStore = useStore(selectedStoreId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedStore?.name || 'Stores'}
            </MenuButton>
            <MenuList>
                {data?.results.map((store) => (
                    <MenuItem
                        fontWeight={store.id === selectedStore?.id ? 'bold' : 'normal'}
                        fontSize={store.id === selectedStore?.id ? 'lg' : 'md'}
                        onClick={() => setSelectedStoreId(store.id)}
                        key={store.id}
                        cursor="pointer"
                    >
                        {store.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default StoreSelector;
