import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValues } from '../../interfaces/FormValues';
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';

interface CustomFormProps {
	label: string;
	buttonText: string;
	onSubmit: SubmitHandler<FormValues>;
	inputValue?: string;
	validationRules?: {
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

	let errorMessage = null;
	if (errors.name) {
		switch (errors.name.type) {
			case 'minLength':
				errorMessage = 'The name must be at least 3 characters long';
				break;
			case 'pattern':
				errorMessage = 'The name must not contain any numbers';
				break;
			default:
				errorMessage = 'Please provide the name';
		}
	}

	const isError = !!errorMessage;

	return (
		<FormControl isRequired={validationRules?.required} isInvalid={isError}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormLabel>{label}</FormLabel>
				<Flex alignItems="center">
					<Input
						defaultValue={inputValue ? inputValue : ''}
						{...register('name', validationRules)}
					/>
					<Button colorScheme="blue" type="submit" margin="0 0 0 10px">
						{buttonText}
					</Button>
				</Flex>
				{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
			</form>
		</FormControl>
	);
};

export default CustomForm;
