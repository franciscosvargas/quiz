import { call, put, takeLeading } from 'redux-saga/effects';

//Method push is used to navigate the user enter pages
//addicting a new page on navigation history
import { push } from 'connected-react-router'

import api from '../../services/api'

import * as actions from '../actions/quiz';

function* get(action) {
	const { data } = yield call(api.get, `/quiz?number=${action.payload.number}`)

	yield put(actions.request(data))
	yield put(push('/play'))
}

function* finish() {
	yield put(push('/'))
}

const quizSaga = [
	takeLeading('QUIZ_REQUEST', get),
	takeLeading('QUIZ_FINISH', finish)


]

export default quizSaga