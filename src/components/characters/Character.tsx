import { Box, Text, Image, Center } from '@chakra-ui/react';
import { CharacterValues } from '../../interfaces/CharacterValues';

interface CharacterProps {
	character: CharacterValues;
}

const Character = ({ character }: CharacterProps) => {
	return (
		<Center>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				border="1px solid"
				borderRadius="10px"
				h="14rem"
				w="9rem"
				overflow="hidden"
				textOverflow="ellipsis"
			>
				<Image
					src={character.image}
					alt={character.name}
					width="100%"
					borderRadius="10px 10px 0px 0"
					borderBottom="1px solid"
				/>
				<Box
					h="4.5rem"
					m=".4rem .4rem"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Text fontSize="xl" textAlign="center" m=".1rem">
						{character.name}
					</Text>
				</Box>
			</Box>
		</Center>
	);
};

export default Character;
