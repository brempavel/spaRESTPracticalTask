import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { login } from '../../reducers/userReducer';
import { FormValues } from '../../interfaces/FormValues';
import { localStorageKey } from '../../constatnts/common';
import CustomForm from './CustomForm';

const AccountForm = () => {
	const { name } = useAppSelector(({ user }) => user);
	const dispatch = useAppDispatch();
	const history = useHistory();

	const onSubmit = ({ name }: FormValues) => {
		localStorage.removeItem(localStorageKey);
		localStorage.setItem(localStorageKey, name);
		dispatch(login(name));
		history.push('/main');
	};

	const validationRules = {
		required: true,
		minLength: 3,
		pattern: /^[A-Z a-z]+$/,
	};

	return (
		<CustomForm
			label="Change Your Name"
			buttonText="Ok"
			onSubmit={onSubmit}
			validationRules={validationRules}
			inputValue={name}
		/>
	);
};

export default AccountForm;
