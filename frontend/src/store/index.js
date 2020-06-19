import { createStore,  applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from '../routes/history'
import reducer from './reducers'
import rootSaga from './sagas'

//Create Redux-Saga Middleware 
const sagaMiddleware = createSagaMiddleware();

// Combine saga and router middlewares
const middlewares = [
	sagaMiddleware,
	routerMiddleware(history)
];

const composer = applyMiddleware(...middlewares)

//Create store connected on react-router
const store = createStore(connectRouter(history)(reducer), composer);

//Initiate Redux-Saga Middleware 
sagaMiddleware.run(rootSaga);


export default store;