import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Provider } from 'react-redux';
import store from './store.ts';

import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider>
						<App />
					</ChakraProvider>
				</QueryClientProvider>
			</Provider>
		</Router>
	</React.StrictMode>
);
