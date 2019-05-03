import { Reducer } from 'redux';
import { IAuthAction, AuthActionTypes, IAuthState } from '../actions/types';

const INITIAL_STATE: IAuthState = {
   authenticated: '',
   errorMessage: ''
};

const authReducer: Reducer<IAuthState, IAuthAction> = (
   state = INITIAL_STATE,
   action
) => {
   switch (action.type) {
      case AuthActionTypes.AUTH_USER:
         return {
            ...state,
            authenticated: action.payload
         };

      case AuthActionTypes.AUTH_ERROR:
         return {
            ...state,
            errorMessage: action.payload
         };

      default:
         return state;
   }
};

export default authReducer;
