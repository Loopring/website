import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import Project from './Project';
import Protocol from './Protocol';
import LRC from './LRC';
import Team from './Team';
import Blog from './Blog';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={Project} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/lrc" component={LRC} />
      <Route path="/team" component={Team} />
      {<Route path="/blog" component={Blog} />}
      <Route component={NotFound} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
