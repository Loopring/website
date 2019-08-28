import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './Footer.en.json';
import chineseTranslation from './Footer.cn.json';
import I18nComponent from './I18nComponent';

import './Footer.scss';

class Footer extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <ul>
            <li>
              <a href="mailto:foundation@loopring.org">Email</a>
            </li>
            ⭑
            <li>
              <a href="https://medium.com/loopring-protocol">Medium</a>
            </li>
            ⭑
            <li>
              <a href="https://twitter.com/loopringorg">Twitter</a>
            </li>
            ⭑
            <li>
              <a href="https://reddit.com/r/loopringorg">Reddit</a>
            </li>
            ⭑
            <li>
              <a href="https://t.me/loopring_en">Telegram</a>
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
          <p className="has-text-grey">Loopring Project Ltd</p>
        </div>
      </footer>
    );
  }
}

export default withLocalize(Footer);
