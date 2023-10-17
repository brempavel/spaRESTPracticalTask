import { Stack, RadioGroup, Radio, Center } from '@chakra-ui/react';

interface CustomCheckboxProps {
	onChange: (gender: string) => void;
}

const CustomCheckbox = ({ onChange }: CustomCheckboxProps) => {
	return (
		<>
			<Center>
				<label>Filter By Gender</label>
			</Center>
			<Center>
				<RadioGroup onChange={onChange} m="1rem 1rem">
					<Stack direction="row">
						<Radio colorScheme="blue" size="lg" value="">
							All
						</Radio>
						<Radio colorScheme="blue" size="lg" value="male">
							Male
						</Radio>
						<Radio colorScheme="blue" size="lg" value="female">
							Female
						</Radio>
						<Radio colorScheme="blue" size="lg" value="genderless">
							Genderless
						</Radio>
						<Radio colorScheme="blue" size="lg" value="unknown">
							Unknown
						</Radio>
					</Stack>
				</RadioGroup>
			</Center>
		</>
	);
};

export default CustomCheckbox;
