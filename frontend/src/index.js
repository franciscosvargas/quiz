import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import './index.css'
import Routes from './routes'
import Store  from './store';

ReactDOM.render(
	<Provider store={Store}>
		<Routes />
	</Provider>,
  	document.getElementById('root')
);
