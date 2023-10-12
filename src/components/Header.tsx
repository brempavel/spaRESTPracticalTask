import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { logout } from '../reducers/userReducer';
import { localStorageKey } from '../constatnts/common';
import { Button, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
	const { name } = useAppSelector(({ user }) => user);
	const dispatch = useAppDispatch();
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem(localStorageKey);
		dispatch(logout());
	};

	const handleChangeAccountInfo = () => {
		history.push('/account');
	};

	return (
		<Flex alignItems="center" justifyContent="center">
			<Heading as="h2" size="lg">
				Hello, {name}!
			</Heading>
			<Button
				margin="10px"
				colorScheme="blue"
				onClick={handleChangeAccountInfo}
			>
				Change account information
			</Button>
			<Button colorScheme="red" onClick={handleLogout}>
				Logout
			</Button>
		</Flex>
	);
};

export default Header;
