import {
    Avatar,
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../entities';

interface Props {
    user: User;
}

const Signin = ({ user }: Props) => {
    const [data, setData] = useState<User>(null || user);

    const userFromStorage = localStorage.getItem('data')
        ? localStorage.getItem('data')
        : null;

    // use google login hook
    // onSuccess function
    // get user info from google
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                setData(res.data);
                localStorage.setItem('data', JSON.stringify(res.data));
            } catch (error) {
                console.log(error);
            }
        },
    });

    const userExist = () => {
        if (typeof userFromStorage === 'string' && userFromStorage !== null) {
            setData(JSON.parse(userFromStorage));
        } else {
            login();
        }
    };

    useEffect(() => {
        userExist();
    }, []);

    return (
        // create google login component using chakra
        <Box padding="4">
            {!data?.email ? (
                <Button colorScheme="brand" onClick={() => userExist()}>
                    Sign in with Google
                </Button>
            ) : (
                // create menu with avatar and name using chakra
                <Menu>
                    <MenuButton>
                        <Avatar src={data?.picture} name={data?.name} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Box>
                                <Text fontWeight="bold">{data?.name}</Text>
                                <Text fontWeight="normal" fontSize="sm">
                                    {data?.email}
                                </Text>
                                <Text color="gray.500">View Profile</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Box>
    );
};

export default Signin;
