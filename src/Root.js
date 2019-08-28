import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import './index.scss';
import ScrollToTop from './Components/ScrollToTop';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';

import About from './About/About';
import Protocol from './Protocol/Protocol';
import LRC from './LRC/LRC';
import Team from './Team/Team';
import Updates from './Updates/Updates';
// import BlogPage from "./BlogPage";
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

import {LocalizeProvider} from 'react-localize-redux';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        {name: 'English', code: 'en'},
        {name: '中文', code: 'cn'},
      ],
      // translation: globalTranslations,
      options: {renderToStaticMarkup},
    });
  }

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

export default withLocalize(Root);
