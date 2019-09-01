import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { LocalizeProvider, withLocalize } from "react-localize-redux";
import detectBrowserLanguage from "detect-browser-language";

import About from "./About/About";
import Protocol from "./Protocol/Protocol";
import LRC from "./LRC/LRC";
import Team from "./Team/Team";
import Updates from "./Updates/Updates";
import Article from "./Article/Article";
import NotFound from "./NotFound/NotFound";

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
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/protocol" exact component={Protocol} />
              <Route path="/lrc" exact component={LRC} />
              <Route path="/team" exact component={Team} />
              <Route
                path="/updates"
                exact
                render={props => <Updates key="updates_all" group="all" />}
              />
              <Route
                path="/updates/biweekly"
                exact
                render={props => (
                  <Updates key="updates_biweekly" group="biweekly" />
                )}
              />
              <Route
                path="/updates/loopring3.0"
                exact
                render={props => (
                  <Updates key="updates_loopring3_0" group="loopring3_0" />
                )}
              />

              <Route
                path="/updates/learning"
                exact
                render={props => (
                  <Updates key="updates_learning" group={"learning"} />
                )}
              />
              <Route
                path="/updates/thoughts"
                exact
                render={props => (
                  <Updates key="updates_thoughts" group="thoughts" />
                )}
              />
              <Route
                path="/updates/news"
                exact
                render={props => <Updates key="updates_news" group="news" />}
              />
              <Route path="/post/:postId" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);