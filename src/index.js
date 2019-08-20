import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import Header from './Header.js';
import Protocol from './Protocol';
import CodeBase from './CodeBase';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Protocol} />
      <Route path="/codebase" component={CodeBase} />
      <Route path="/contact" component={Protocol} />
      <Route component={NotFound} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
