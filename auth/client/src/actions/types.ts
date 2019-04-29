import { SyntheticEvent } from 'react';

export enum AuthAction {
   AUTH_USER = 'auth_user'
}

export interface IFormProps {
   email: string;
   password: string;
}

export interface IAuthState {
   authenticated: string;
   errorMessage: string;
}
