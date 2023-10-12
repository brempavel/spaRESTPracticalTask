import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (page: number = 1, name?: string) => {
	const { data } = await axios.get(baseUrl, {
		params: { page, name },
	});
	return data;
};
