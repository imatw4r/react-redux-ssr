// THIS IS THE ENTRYPOINT FOR ** CLIENT ** SIDE APP
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // handle async action creators
import { Provider } from 'react-redux'; // ties store to components
import reducers from './reducers';
// You want to render the real app into the same tag (div in this case)
// that you've rendered your app in before

const clientStore = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={clientStore}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')); 

