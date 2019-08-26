import React from 'react';

import './SectionLRCInfo.scss';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

const API = './lrc_info.json';

class SectionLRCInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exchanges: [],
      facts: [],
    };
    AOS.init();
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) =>
          this.setState({facts: data.facts, exchanges: data.exchanges})
        );
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-lrc-info is-large has-background-grey">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>BUY TO Invest</h1>
            </div>
          </div>

          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column column-info  is-6 has-text-left"
            >
              <div className="content">
                <h2>Token Information</h2>
                <ul>
                  {this.state.facts.map((item, idx) => (
                    <li key={idx}>
                      ⟶ <span className="key">{item.key}: </span>
                      <span className="tag value">{item.value}</span>
                    </li>
                  ))}
                </ul>

                <h2>Regarding LRC Token Migration</h2>
                <p>
                  On May 07 2019, we migrated LRC from{' '}
                  <a
                    className="highlight"
                    href="https://etherscan.io/token/0xef68e7c694f40c8202821edf525de3782458639f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    version 1.0↗
                  </a>{' '}
                  to version 2.0. The new LRC token remains ERC20 compliant and
                  now supports a “burn” function that will be used by the
                  Loopring Protocol and the new{' '}
                  <a
                    href="https://medium.com/loopring-protocol/oedax-looprings-open-ended-dutch-auction-exchange-model-d92cebbd3667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                  >
                    Oedax↗
                  </a>{' '}
                  auction protocol to burn LRC as the protocols are being used.
                  The total LRC supply will decrease over time to reflect these
                  burns.
                </p>

                <p>
                  To learn more about the migration, please check out our{' '}
                  <a
                    className="highlight"
                    href="https://medium.com/loopring-protocol/lrc-token-upgraded-a26ee6f87b84"
                  >
                    blog post↗
                  </a>
                  .
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="column column-exchange  is-6 has-text-left"
            >
              <div className="content">
                <h2>Exchanges</h2>
                <ul>
                  {this.state.exchanges.map((exchange, idx) => (
                    <li key={idx}>
                      ⟶{' '}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={exchange.url}
                      >
                        <span className="exchange-name">{exchange.name}</span>
                        {exchange.pairs.map((token, idx) => (
                          <span key={idx} className="tag">
                            LRC/{token}
                          </span>
                        ))}
                      </a>
                    </li>
                  ))}
                </ul>
                <h2>Coming Soon...</h2>
                <ul>
                  <li className="coming-soon highlighted">
                    ⟶{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wedex.io"
                    >
                      <span className="exchange-name">WeDEX</span>
                      <span className="tag">LRC/ETH</span>
                      <span className="tag">LRC/USDT</span>
                    </a>
                    <div className="footnote">
                      WeDEX will be the first DEX built on top of Loopring 3.0.
                      It is owned and will be run by an independent third-party.
                    </div>
                  </li>
                  <li className="coming-soon ">
                    ⟶{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://UpDEX.io"
                    >
                      <span className="exchange-name">UpDEX</span>
                      <span className="tag">LRC/ETH</span>
                      <span className="tag">LRC/USDT</span>
                      <span className="tag">LRC/WBTC</span>
                    </a>
                    <div className="footnote">
                      UpDEX will be a fully compliant Loopring DEX based in Hong
                      Kong, China.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionLRCInfo;
