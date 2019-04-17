import tv4 from 'tv4';
import stateSchema from './stateSchema';
import { Dispatch, Middleware } from 'redux';

const stateValidator: Middleware = ({ dispatch, getState }) => (
   next: Dispatch
) => (action: any) => {
   next(action);

   if (tv4.validate(getState(), stateSchema)) {
      console.warn('Invalid state schema detected');
   }
};

export default stateValidator;
