import { Center, Text } from '@chakra-ui/react';

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<Center m="1rem 1rem">
			<Text fontSize="3xl" color="red">
				{message}
			</Text>
		</Center>
	);
};

export default ErrorMessage;
