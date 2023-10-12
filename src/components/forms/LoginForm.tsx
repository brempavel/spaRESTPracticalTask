import { useAppDispatch } from '../../hooks/hooks';
import { login } from '../../reducers/userReducer';
import { FormValues } from '../../interfaces/FormValues';
import { localStorageKey } from '../../constatnts/common';
import CustomForm from './CustomForm';

const LoginForm = () => {
	const dispatch = useAppDispatch();

	const onSubmit = ({ name }: FormValues) => {
		localStorage.setItem(localStorageKey, name);
		dispatch(login(name));
	};

	const validationRules = {
		required: true,
		minLength: 3,
		pattern: /^[A-Z a-z]+$/,
	};

	return (
		<CustomForm
			label="Your Name"
			buttonText="Login"
			onSubmit={onSubmit}
			validationRules={validationRules}
		/>
	);
};

export default LoginForm;
