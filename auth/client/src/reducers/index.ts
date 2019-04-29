import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import auth from './auth';
import { IAuthState } from '../actions/types';

export interface IAppState {
   auth: IAuthState;
   form: FormStateMap;
}

export default combineReducers<IAppState>({
   auth,
   form: formReducer
});
