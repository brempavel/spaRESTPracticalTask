import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	name: string;
}

const initialState: UserState = {
	name: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(_, { payload }) {
			return { name: payload };
		},
		logout() {
			return { name: '' };
		},
	},
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
