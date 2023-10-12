import { Box, Heading, Image } from '@chakra-ui/react';
import { CharacterValues } from '../../interfaces/CharacterValues';

interface CharacterProps {
	character: CharacterValues;
}

const Character = ({ character }: CharacterProps) => {
	return (
		<Box m="10px" outline="2px solid" borderRadius="10px">
			<Image
				src={character.image}
				alt={character.name}
				width="100%"
				borderRadius="10px 10px 0px 0"
			/>
			<Heading as="h3" size="lg" width="100%" mx="5px">
				{character.name}
			</Heading>
		</Box>
	);
};

export default Character;
