import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { featuresReducer } from './state/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

// const monsterReducer = combineReducers({
//   features: featuresReducer,
// })

const store = createStore(
  featuresReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
