import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import noteReducer from './redux/NoteReducer'
import App from './App';
import createLogger  from 'redux-logger';

const reduxLogger = require('redux-logger');

//const createLogger = require(redux-logger);

const store = createStore(noteReducer,applyMiddleware(createLogger ));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
