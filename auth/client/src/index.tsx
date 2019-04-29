import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { IAppState } from './reducers';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

const store: Store<IAppState> = createStore(
   reducers,
   {},
   applyMiddleware(reduxThunk)
);

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
         </App>
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
