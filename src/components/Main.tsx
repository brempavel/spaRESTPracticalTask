import { useState, useEffect, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../services/rickAndMortyService';
import Header from './Header';
import CharacterList from './characters/CharacterList';
import { ApiCharacterValues } from '../interfaces/CharacterValues';
import { charactersQueryKey } from '../constatnts/common';
import CustomSpinner from './CustomSpinner';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { finish, start } from '../reducers/loadingReducer';
import SearchForm from './SearchBar';
import CustomModal from './CustomModal';
import { ApiError } from '../enums/error';
import { debounce } from '../utils/common';

const Main = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector(({ loading }) => loading);
	const [page, setPage] = useState<number>(1);
	const [pages, setPages] = useState<number>(1);
	const [query, setQuery] = useState<string>('');
	const [characters, setCharacters] = useState<ApiCharacterValues[]>([]);
	const [charactersCount, setCharactersCount] = useState<number>(0);
	const [error, setError] = useState<ApiError>();
	const [onSearchResultModalOpen, setOnSearchResultModalOpen] =
		useState<() => void>();

	const { isSuccess } = useQuery({
		queryKey: [charactersQueryKey, { page, query }],
		queryFn: () => getCharacters(page, query),
		refetchOnWindowFocus: false,
		retry: false,
		onSuccess: (data) => {
			if (data.error) {
				switch (data.error) {
					case ApiError.NotFound:
						setError(ApiError.NotFound);
						break;
					default:
						throw new Error('Unexpected error');
				}
				dispatch(finish());
				return;
			}
			setCharacters((previousCharacters) => [
				...previousCharacters,
				...data.results.map(({ name, image, id }: ApiCharacterValues) => ({
					name,
					image,
					id,
				})),
			]);
			setPages(data.info.pages);
			setCharactersCount(data.info.count);
			if (query && page === 1) {
				onSearchResultModalOpen?.();
			}
			dispatch(finish());
		},
	});

	useEffect(() => {
		if (!isSuccess && !isLoading) {
			dispatch(start());
		}
	}, [dispatch, isSuccess, isLoading]);

	const onQueryChange = debounce(
		async (event: ChangeEvent<HTMLInputElement>) => {
			setPage(1);
			setCharacters([]);
			setQuery(event.target.value);
		},
		1000
	);

	const onBottomReached = () => {
		setPage((previousPage) => {
			if (previousPage === pages) {
				return previousPage;
			}
			return previousPage + 1;
		});
	};

	return (
		<>
			<Header />
			<SearchForm onChange={onQueryChange} />
			<CharacterList
				characters={characters}
				onBottomReached={onBottomReached}
			/>
			{isLoading && <CustomSpinner />}
			{createPortal(
				<CustomModal
					charactersCount={charactersCount}
					setOnOpen={setOnSearchResultModalOpen}
				/>,
				document.body
			)}
			{error === ApiError.NotFound && 'Nothing found'}
		</>
	);
};

export default Main;
