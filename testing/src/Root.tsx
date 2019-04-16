import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async';
import reducers from './reducers';

interface Props {
   children: React.ReactNode;
   initialState?: {};
}

const Root: React.FC<Props> = ({ children, initialState = {} }) => {
   const store = createStore(reducers, initialState, applyMiddleware(async));

   return <Provider store={store}>{children}</Provider>;
};

export default Root;
