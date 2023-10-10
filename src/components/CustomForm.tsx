import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
	name: string;
}

interface CustomFormProps {
	label: string;
	buttonText: string;
	onSubmit: SubmitHandler<FormValues>;
	inputValue?: string;
	validationRules: {
		required?: boolean;
		minLength?: number;
		pattern?: RegExp;
	};
}

const CustomForm = ({
	label,
	buttonText,
	onSubmit,
	inputValue,
	validationRules,
}: CustomFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	let error = null;
	if (errors.name) {
		switch (errors.name.type) {
			case 'minLength':
				error = 'The name must be at least 3 characters long';
				break;
			case 'pattern':
				error = 'The name must not contain any numbers';
				break;
			default:
				error = 'Please provide the name';
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>{label}</label>
			<input
				defaultValue={inputValue ? inputValue : ''}
				{...register('name', validationRules)}
			/>
			{errors.name && <span>{error}</span>}
			<input type="submit" value={buttonText} />
		</form>
	);
};

export default CustomForm;
