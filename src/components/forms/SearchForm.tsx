import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, FormControl, Input } from '@chakra-ui/react';
import { SearchFormValues } from '../../interfaces/SearchFormValues';

interface SearchFromProps {
	onSubmit: SubmitHandler<SearchFormValues>;
}

const SearchForm = ({ onSubmit }: SearchFromProps) => {
	const { register, handleSubmit } = useForm<SearchFormValues>();

	return (
		<Box mx="25vw">
			<FormControl>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input {...register('query')} placeholder="Enter Your Search Term" />
				</form>
			</FormControl>
		</Box>
	);
};

export default SearchForm;
