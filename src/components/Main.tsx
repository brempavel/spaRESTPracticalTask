import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../services/rickAndMortyService';
import Header from './Header';
import CharacterList from './characters/CharacterList';
import { CharacterValues } from '../interfaces/CharacterValues';
import { charactersQueryKey } from '../constatnts/common';
import CustomSpinner from './CustomSpinner';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { finish, start } from '../reducers/loadingReducer';
import SearchForm from './forms/SearchForm';
import { SearchFormValues } from '../interfaces/SearchFormValues';

const Main = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector(({ loading }) => loading);
	const [page, setPage] = useState<number>(1);
	const [query, setQuery] = useState<string>('');
	const [characters, setCharacters] = useState<CharacterValues[]>([]);

	const { isSuccess } = useQuery({
		queryKey: [charactersQueryKey, { page, query }],
		queryFn: () => getCharacters(page, query),
		refetchOnWindowFocus: false,
		onSuccess: (data) => {
			setCharacters((previousCharacters) => [
				...previousCharacters,
				...data.results,
			]);
			dispatch(finish());
		},
	});

	useEffect(() => {
		if (!isSuccess && !isLoading) {
			dispatch(start());
		}
	}, [dispatch, isSuccess, isLoading]);

	const onSubmit = async ({ query }: SearchFormValues) => {
		setCharacters([]);
		setQuery(query);
	};

	return (
		<>
			<Header />
			<SearchForm onSubmit={onSubmit} />
			<CharacterList characters={characters} setPage={setPage} />
			{isLoading && <CustomSpinner />}
		</>
	);
};

export default Main;
