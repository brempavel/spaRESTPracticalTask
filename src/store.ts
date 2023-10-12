import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import loadingReducer from './reducers/loadingReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
		loading: loadingReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
