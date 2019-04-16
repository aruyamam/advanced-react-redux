import { Dispatch, Middleware } from 'redux';

const asyncMiddleware: Middleware = ({ dispatch }) => (next: Dispatch) => (
   action: any
) => {
   // Check to see if the action
   // has a promise on its 'payload' propety
   // If it does, then wait for it to resolve
   // If it doesn't, then send the action on to the
   // next middlewrae
   if (!action.payload || !action.payload.then) {
      return next(action);
   }

   // We want to wait for the promise to resolve
   // (get its data!!) and then create a new action
   // with that data and dispatch it
   action.payload.then((response: any) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
   });
};

export default asyncMiddleware;
