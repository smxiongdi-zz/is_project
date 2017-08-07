import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
//import { App } from './App.jsx';
import App from './App.jsx';
import configureStore from './configureStore.jsx';

const store = configureStore();
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
