import React from 'react';
import './Footer.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <p>
            <a href="mailto:foundation@loopring.org">Email</a>⭑
            <a href="https://medium.com/loopring-protocol">Medium</a>⭑
            <a href="https://twitter.com/loopringorg">Twitter</a>⭑
            <a href="https://reddit.com/r/loopringorg">Reddit</a>⭑
            <a href="https://t.me/loopring_en">Telegram</a>⭑
            <a href="https://discord.gg/KkYccYp">Discord</a>⭑
            <a href="https://github.com/Loopring">GitHub</a>⭑
            <a href="https://open.kakao.com/o/gJbSZdF">Kakao</a>
          </p>
          <p className="has-text-grey">Loopring Project Ltd</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
