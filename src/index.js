import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries.js';
import DevTools from './devTools';

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Navigation}>

			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
); 

store.dispatch(getCountries());