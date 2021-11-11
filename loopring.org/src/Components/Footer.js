import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/Footer.en.json";
import chineseTranslation from "./i18n/Footer.zh.json";
import JsonI18nComponent from "./JsonI18nComponent";
import axios from "axios";

import "./Footer.scss";

class Footer extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }
  subscribe(e) {
    const url = "https://api.convertkit.com/v3/forms/1156897/subscribe";
    const apiKey = "qoOCFRB819dkXMM59a7M0Q";
    // this.burgerRef.current.classList.toggle("is-active");
    // this.menuRef.current.classList.toggle("is-active");

    axios
      .post(
        url,
        { api_key: apiKey, email: "test@google.com" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        console.log(response);
      });
  }

  render() {
    return (
      <footer className="footer is-centered has-background-white">
        <div className="container is-centered has-text-centered">
          {/* <div className="columns is-centered is-vcentered">
            <div className="column is-4  is-right is-vcentered has-text-centered">
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder={this.state.I.yourEmail}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    className="button is-link"
                    onClick={this.subscribe.bind(this)}
                  >
                    {this.state.I.subscribe}
                  </button>
                </div>
              </div>
            </div>
          </div>*/}
          <ul>
            <li>
              <a href="https://medium.com/loopring-protocol">Medium</a>
            </li>
            ⭑
            <li>
              <a href="https://twitter.com/loopringorg">
                {this.state.I.twitter}
              </a>
            </li>
            ⭑
            <li>
              <a href="https://discord.gg/KkYccYp">Discord</a>
            </li>
            ⭑
            <li>
              {this.isChinese() ? (
                <a href="https://www.youtube.com/c/loopring">油管</a>
              ) : (
                <a href="https://www.youtube.com/c/loopring">YouTube</a>
              )}
            </li>
            ⭑
            <li>
              <a href="https://weibo.com/loopringfoundation">
                {this.state.I.weibo}
              </a>
            </li>
            ⭑
            <li>
              <a href="https://reddit.com/r/loopringorg">Reddit</a>
            </li>
            ⭑
            <li>
              <a href="https://github.com/Loopring">GitHub</a>
            </li>
          </ul>
          <div className="org">
            <p className="has-text-grey">
              {this.state.I.org} {this.state.I.wechat}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withLocalize(Footer);
