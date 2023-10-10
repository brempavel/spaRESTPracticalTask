import { Route, Link, Redirect } from 'react-router-dom';
import { useAppSelector } from './hooks/hooks';
import LoginForm from './components/LoginForm';
import AccountForm from './components/AccountForm';
import Main from './components/Main';

const App = () => {
	const { name } = useAppSelector(({ user }) => user);
	const isUserLoggedIn = !!name;

	return (
		<>
			<h1>Welcome to SPA: REST practical task</h1>
			{isUserLoggedIn ? (
				<>
					<Redirect to="/main" />
					<Route path="/main">
						<Main name={name} />
					</Route>
					<Route path="/account">
						<AccountForm />
					</Route>
				</>
			) : (
				<>
					<Link to="/login">Login</Link>
					<Route path="/login">
						<LoginForm />
					</Route>
				</>
			)}
		</>
	);
};

export default App;
