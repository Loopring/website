import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
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

export default Footer;
