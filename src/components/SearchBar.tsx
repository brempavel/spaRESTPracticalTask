import { Box, FormControl, Input } from '@chakra-ui/react';

interface SearchFromProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchFromProps) => {
	return (
		<Box mx="25vw" mb="1rem">
			<FormControl>
				<Input onChange={onChange} placeholder="Enter Your Search Term" />
			</FormControl>
		</Box>
	);
};

export default SearchBar;
