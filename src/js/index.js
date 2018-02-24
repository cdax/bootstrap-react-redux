
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import App from './components/App';


const app = combineReducers({});


ReactDOM.render(
  <Provider store={createStore(app)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
