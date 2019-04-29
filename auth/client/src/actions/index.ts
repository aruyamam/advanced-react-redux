import axios from 'axios';
import { IFormProps } from './types';

export const signup = (formProps: IFormProps) => (dispatch: Function) => {
   axios.post('http://localhost:3090/signup', formProps);
};
