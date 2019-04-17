import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import reducers from './reducers';

interface Props {
   children: React.ReactNode;
   initialState?: {};
}

const Root: React.FC<Props> = ({ children, initialState = {} }) => {
   const store: Store = createStore(
      reducers,
      initialState,
      applyMiddleware(async, stateValidator)
   );

   return <Provider store={store}>{children}</Provider>;
};

export default Root;
