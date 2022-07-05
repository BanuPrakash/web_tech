import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import rootReducer from './redux/reducers';

import {createStore, compose} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
  </Provider>
);

 
