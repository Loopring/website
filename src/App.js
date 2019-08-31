import React from "react";
import { Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { LocalizeProvider, withLocalize } from "react-localize-redux";
import detectBrowserLanguage from "detect-browser-language";

import About from "./About/About";
import Protocol from "./Protocol/Protocol";
import LRC from "./LRC/LRC";
import Team from "./Team/Team";
import Updates from "./Updates/Updates";
import Article from "./Article/Article";
import NotFound from "./NotFound";

class App extends React.Component {
  render() {
    const lang = detectBrowserLanguage().toLowerCase();
    if (lang === "zh" || lang === "zh-cn") {
      document.title = "路印 - 高性能去中心化交易协议";
    }
    return (
      <LocalizeProvider>
        <HashRouter>
          <ScrollToTop>
            <Route path="/" exact component={About} />
            <Route path="/protocol" component={Protocol} />
            <Route path="/lrc" component={LRC} />
            <Route path="/team" component={Team} />
            <Route path="/updates" component={Updates} />
            <Route
              path="/updates/biweekly"
              component={() => <Updates tag="zhou-bao" />}
            />
            <Route path="/post/:postId" component={Article} />
            <Route component={NotFound} />
          </ScrollToTop>
        </HashRouter>
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);
