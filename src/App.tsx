import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import LoginForm from './components/forms/LoginForm';
import AccountForm from './components/forms/AccountForm';
import Main from './components/Main';
import { localStorageKey } from './constatnts/common';
import { login } from './reducers/userReducer';
import { Center, Box, Heading } from '@chakra-ui/react';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const name = localStorage.getItem(localStorageKey);
		if (name) {
			dispatch(login(name));
		}
	}, [dispatch]);

	const { name } = useAppSelector(({ user }) => user);
	const isUserLoggedIn = !!name;

	return (
		<>
			<Center borderBottom="1px solid black">
				<Heading as="h1" size="xl" mt=".5rem">
					Welcome to SPA: REST practical task
				</Heading>
			</Center>
			<Center>
				<Box w="100%" m=".5rem">
					{isUserLoggedIn ? (
						<>
							<Redirect to="/main" />
							<Route path="/main">
								<Main />
							</Route>
							<Route path="/account">
								<AccountForm />
							</Route>
						</>
					) : (
						<>
							<Redirect to="/login" />
							<Route path="/login">
								<LoginForm />
							</Route>
						</>
					)}
				</Box>
			</Center>
		</>
	);
};

export default App;
