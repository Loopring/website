import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import './index.scss';

console.log('public url: ', process.env.PUBLIC_URL);
console.log('navigator.browserLanguage: ', navigator.browserLanguage);
console.log('navigator.language: ', navigator.language);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
