import { Spinner } from '@chakra-ui/react';

const CustomSpinner = () => {
	return (
		<Spinner
			w="100px"
			h="100px"
			color="black"
			pos="absolute"
			left="50vw"
			bottom="50vh"
		/>
	);
};

export default CustomSpinner;
