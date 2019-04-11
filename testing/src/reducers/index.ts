import { combineReducers } from 'redux';
import commentReducer from './comments';
import authReducer from './auth';

export default combineReducers({
   comments: commentReducer,
   auth: authReducer
});
