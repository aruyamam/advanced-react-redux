export enum AuthActionTypes {
   AUTH_USER = 'auth_user',
   AUTH_ERROR = 'auth_error'
}

export interface IAuthAction {
   type: AuthActionTypes;
   payload: string;
}

export interface IFormProps {
   email: string;
   password: string;
}

export interface IAuthState {
   authenticated: string | null;
   errorMessage: string;
}
