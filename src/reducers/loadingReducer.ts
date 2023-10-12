import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
	isLoading: boolean;
}

const initialState: LoadingState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		start() {
			return { isLoading: true };
		},
		finish() {
			return { isLoading: false };
		},
	},
});

export const { start, finish } = loadingSlice.actions;
export default loadingSlice.reducer;
