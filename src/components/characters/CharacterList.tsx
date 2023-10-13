import { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {
	ApiCharacterValues,
	CharacterValues,
} from '../../interfaces/CharacterValues';
import Character from './Character';

const scrollOffsetInPx = 10;

interface CharacterListProps {
	characters: ApiCharacterValues[];
	onBottomReached: () => void;
}

const CharacterList = ({ characters, onBottomReached }: CharacterListProps) => {
	const isAtBottom = () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		const scrollPosition = scrollTop + scrollOffsetInPx;
		const threshold = scrollHeight - clientHeight;
		return scrollPosition >= threshold;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isAtBottom()) {
				onBottomReached();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [onBottomReached]);

	useEffect(() => {
		const { scrollHeight, clientHeight } = document.documentElement;
		console.log(scrollHeight, clientHeight);
		if (scrollHeight === clientHeight) {
			onBottomReached();
		}
	}, [onBottomReached]);

	return (
		<SimpleGrid minChildWidth="9rem" spacing="2">
			{characters.map((character: CharacterValues) => (
				<Character key={character.id} character={character} />
			))}
		</SimpleGrid>
	);
};

export default CharacterList;
