import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { LocalizeProvider, withLocalize } from "react-localize-redux";
import detectBrowserLanguage from "detect-browser-language";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

class App extends React.Component {
  render() {
    const lang = detectBrowserLanguage().toLowerCase();
    if (lang === "zh" || lang === "zh-cn") {
      document.title = "路印科技";
    }
    return (
      <LocalizeProvider>
        <HashRouter>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);
