import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/Footer.en.json";
import chineseTranslation from "./i18n/Footer.zh.json";
import I18nComponent from "./I18nComponent";

import "./Footer.scss";

class Footer extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <footer className="footer is-centered has-background-white">
        <div className="container is-centered has-text-centered">
          <ul>
            <li>
              <a href="mailto:foundation@loopring.org">
                <Translate id="email" />
              </a>
            </li>
            ⭑
            <li>
              <a href="https://medium.com/loopring-protocol">Medium</a>
            </li>
            ⭑
            <li>
              <a href="https://twitter.com/loopringorg">
                <Translate id="twitter" />
              </a>
            </li>
            ⭑
            <li>
              <a href="https://weibo.com/loopringfoundation">
                <Translate id="weibo" />
              </a>
            </li>
            ⭑
            <li>
              <a href="https://reddit.com/r/loopringorg">Reddit</a>
            </li>
            ⭑
            <li>
              {this.isChinese() ? (
                <a href="https://t.me/loopringfans">Telegram</a>
              ) : (
                <a href="https://t.me/loopring_en">Telegram</a>
              )}
            </li>
            ⭑
            <li>
              <a href="https://discord.gg/KkYccYp">Discord</a>
            </li>
            ⭑
            <li>
              <a href="https://github.com/Loopring">GitHub</a>
            </li>
            ⭑
            <li>
              <a href="https://open.kakao.com/o/gJbSZdF">Kakao</a>
            </li>
          </ul>
          <div className="org">
            <p className="has-text-grey">
              <Translate id="org" />
            </p>
            <p className="wechat">
              <Translate id="wechat" />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withLocalize(Footer);
