import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

//Import navigation history
import history from '../../routes/history'

//Import reducers
import user from './login';
import quiz from './quiz';

export default combineReducers({
	user,
	quiz,
	router: connectRouter(history)
});