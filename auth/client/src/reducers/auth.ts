import { AuthActionTypes, IAuthState } from '../actions/types';

const INITIAL_STATE: IAuthState = {
   authenticated: '',
   errorMessage: ''
};

export default function(state = INITIAL_STATE, action: any) {
   switch (action.type) {
      case AuthActionTypes.AUTH_USER:
         return {
            ...state,
            authenticated: action.payload
         };

      default:
         return state;
   }
}
