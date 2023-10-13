import axios, { AxiosError } from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (page: number = 1, name?: string) => {
	let response;
	try {
		response = await axios.get(baseUrl, {
			params: { page, name },
		});
	} catch (e: unknown) {
		response = (e as AxiosError).response;
	}
	return response?.data;
};
