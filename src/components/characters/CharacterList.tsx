import { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { CharacterValues } from '../../interfaces/CharacterValues';
import Character from './Character';

const scrollOffsetInPx = 10;

interface CharacterListProps {
	characters: CharacterValues[];
	setPage: (setter: (page: number) => number) => void;
}

const CharacterList = ({ characters, setPage }: CharacterListProps) => {
	const isAtBottom = () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		const scrollPosition = scrollTop + scrollOffsetInPx;
		const threshold = scrollHeight - clientHeight;
		return scrollPosition >= threshold;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isAtBottom()) {
				setPage((previousPage) => previousPage + 1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setPage]);

	return (
		<SimpleGrid columns={4} spacing={1}>
			{characters.map((character: CharacterValues) => (
				<Character key={character.id} character={character} />
			))}
		</SimpleGrid>
	);
};

export default CharacterList;
