export interface IAuthState {
   authenticated: string;
   errorMessage: string;
}

const INITIAL_STATE: IAuthState = {
   authenticated: '',
   errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
   return state;
}
