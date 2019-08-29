import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import {
  LocalizeProvider,
  setActiveLanguage,
  withLocalize,
} from 'react-localize-redux';

import About from './About/About';
import Protocol from './Protocol/Protocol';
import LRC from './LRC/LRC';
import Team from './Team/Team';
import Updates from './Updates/Updates';
import NotFound from './NotFound';

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.props.setActiveLanguage("zh");
  // }

  render() {
    return (
      <LocalizeProvider>
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
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);
