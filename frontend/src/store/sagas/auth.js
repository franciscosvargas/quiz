import { takeLatest, call, put } from 'redux-saga/effects';

//Method push is used to navigate the user enter pages
//addicting a new page on navigation history
import { push } from 'connected-react-router'

import api from '../../services/api'

import * as LoginActions from '../actions/login';

//Function to process asynchronous events on login call
function* login(action) {

	yield put(LoginActions.loading())

	//Made a request for the server sending the data received on action
	const { data } = yield call(api.post, `/auth`, action.payload)

	//In case of error, call the failure action
	if(data.error) 
		return yield put(LoginActions.failure(data.error))
	
	yield put(LoginActions.success(data.user._id, data.user.username, data.token))

	//Redirect user to dashboard page
	yield put(push('/dashboard/create'))
}

//Function to process asynchronous events on request call
function* register(action) {

	yield put(LoginActions.loading())

	const { data } = yield call(api.post, `/auth/register`, action.payload)

	if(data.error) 
		return yield put(LoginActions.failure(data.error))

	yield put(LoginActions.success(data.user._id, data.user.username, data.token))

	yield put(push('/dashboard/create'))
}

function* logout() {
   

}

const loginSaga = [
	takeLatest('LOGIN_REQUEST', login),
	takeLatest('REGISTER_REQUEST', register),
    takeLatest('LOGOUT', logout)
]

export default loginSaga