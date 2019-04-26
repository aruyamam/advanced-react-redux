import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';

interface IAppicationState {
   auth: IAuthState;
}

export default combineReducers<IAppicationState>({
   auth
});
