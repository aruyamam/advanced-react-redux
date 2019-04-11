import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

interface Props {
   children: React.ReactNode;
   initialState?: {};
}

const Root: React.FC<Props> = ({ children, initialState = {} }) => {
   const store = createStore(
      reducers,
      initialState,
      applyMiddleware(reduxPromise)
   );

   return <Provider store={store}>{children}</Provider>;
};

export default Root;
