import React from 'react';
import {render} from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import { rootReducer } from "./redux/rootReducer";
import App from './App';
import { spamWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, 
  compose( 
    applyMiddleware(thunk, spamWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(app, document.getElementById('root'));

