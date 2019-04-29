import { IAuthState } from '../actions/types';

const INITIAL_STATE: IAuthState = {
   authenticated: '',
   errorMessage: ''
};

export default function(state = INITIAL_STATE, action: any) {
   return state;
}
