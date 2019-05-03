import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IAuthAction, AuthActionTypes, IAuthState, IFormProps } from './types';

export const signup: ActionCreator<
   ThunkAction<Promise<void>, IAuthState, IFormProps, IAuthAction>
> = (formProps: IFormProps, callback: Function) => async (
   dispatch: Dispatch
) => {
   try {
      const response = await axios.post(
         'http://localhost:3090/signup',
         formProps
      );

      dispatch({
         type: AuthActionTypes.AUTH_USER,
         payload: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      callback();
   } catch (e) {
      dispatch({
         type: AuthActionTypes.AUTH_ERROR,
         payload: 'Email in use'
      });
   }
};

export const signout: ActionCreator<IAuthAction> = () => {
   localStorage.removeItem('token');

   return {
      type: AuthActionTypes.AUTH_USER,
      payload: ''
   };
};
