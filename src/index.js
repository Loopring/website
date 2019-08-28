import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Root from './Root.js';

console.log('public url: ', process.env.PUBLIC_URL);
ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
