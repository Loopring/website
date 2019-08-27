import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import ScrollToTop from './Components/ScrollToTop';

import About from './About';
import Protocol from './Protocol';
import LRC from './LRC';
import Team from './Team';
import Blog from './Blog';
import BlogPage from './BlogPage';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <ScrollToTop>
      <Route path="/" exact component={About} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/lrc" component={LRC} />
      <Route path="/team" component={Team} />
      <Route path="/blogs" component={Blog} />
      <Route path="/blog" component={BlogPage} />
      <Route component={NotFound} />
    </ScrollToTop>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
