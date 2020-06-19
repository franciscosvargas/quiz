import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Home, Login, Register, CreateQuiz, Play } from '../pages';

import history from './history';

const Routes = () => (
    <ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/play" component={Play}/>
			<Route path="/dashboard/create" component={CreateQuiz}/>

		</Switch>
    </ConnectedRouter>
);

export default Routes