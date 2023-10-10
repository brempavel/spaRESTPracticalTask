import { Link } from 'react-router-dom';

interface MainProps {
	name: string;
}

const Main = ({ name }: MainProps) => {
	return (
		<>
			<div>Hello {name}</div>
			<span>
				<Link to="/account">Change credentials</Link>
			</span>
		</>
	);
};

export default Main;
