import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './store/index';
import {BrowserRouter} from 'react-router-dom';
//import axios from 'axios';
//axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';// Si existe .env toma la url base de ahi.. usar el REACT_APP

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
