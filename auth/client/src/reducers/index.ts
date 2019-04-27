import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import auth, { IAuthState } from './auth';

interface IAppState {
   auth: IAuthState;
   form: FormStateMap;
}

export default combineReducers<IAppState>({
   auth,
   form: formReducer
});
