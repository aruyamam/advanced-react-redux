import axios from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthAction, AuthActionTypes, IAuthState, IFormProps } from './types';

export const signup: ActionCreator<
   ThunkAction<Promise<void>, IAuthState, IFormProps, AuthAction>
> = formProps => async (dispatch: Dispatch) => {
   const response = await axios.post('http://localhost:3090/signup', formProps);

   dispatch({
      type: AuthActionTypes.AUTH_USER,
      payload: response.data.token
   });
};
