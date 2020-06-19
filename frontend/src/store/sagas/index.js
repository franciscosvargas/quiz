import { all } from 'redux-saga/effects';

//Import saga files
import  authSaga  from './auth';
import  quizSaga  from './quiz';

//Create a root saga passing an array of sagas
export default function* rootSaga() {
    yield all([
		...authSaga,
		...quizSaga
    ]);
}