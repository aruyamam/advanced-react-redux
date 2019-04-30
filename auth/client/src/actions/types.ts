export enum AuthActionTypes {
   AUTH_USER = 'auth_user'
}

export interface AuthAction {
   type: AuthActionTypes.AUTH_USER;
   playload: string;
}

export interface IFormProps {
   email: string;
   password: string;
}

export interface IAuthState {
   authenticated: string;
   errorMessage: string;
}
