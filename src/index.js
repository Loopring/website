import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import './index.scss';
import ScrollToTop from './Components/ScrollToTop';

import About from './About/About';
import Protocol from './Protocol/Protocol';
import LRC from './LRC/LRC';
import Team from './Team/Team';
import Updates from './Updates/Updates';
// import BlogPage from "./BlogPage";
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <HashRouter>
    <ScrollToTop>
      <Route path="/" exact component={About} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/lrc" component={LRC} />
      <Route path="/team" component={Team} />
      <Route path="/updates" component={Updates} />
      {/* <Route path="/blog" component={BlogPage} />*/}
      <Route component={NotFound} />
    </ScrollToTop>
  </HashRouter>
);

console.log('public url: ', process.env.PUBLIC_URL);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
