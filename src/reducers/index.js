
import { combineReducers } from 'redux';
import { questions } from './questions';
import { users } from './users' ;
import { signUser } from './signUser';
import { loadingBarReducer } from 'react-redux-loading-bar';


export default combineReducers({
    questions,
    users:users, 
    signUser,
    loadingBar: loadingBarReducer
})