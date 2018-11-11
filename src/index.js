import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Provider ជា component ដែលយើងប្រើដើម្បីភ្ជាប់ store ទៅនឹង react app របស់យើង
import { Provider } from 'react-redux';
// store ដែលយើងបានបង្កើតនៅក្នុង file store.js ក្នុង tools folder
import store from './tools/store';

const LetReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<LetReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
