import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries.js';
import DevTools from './devTools';
import routes from './routes';

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
); 

store.dispatch(getCountries());