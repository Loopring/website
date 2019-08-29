import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/TokenInfoSection.en.json';
import chineseTranslation from './i18n/TokenInfoSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './TokenInfoSection.scss';

const API = './json_en/lrc_info.json';

class TokenInfoSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
    this.state = {
      exchanges: [],
      facts: [],
    };
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) =>
          this.setState({facts: data.facts, exchanges: data.exchanges})
        );
  }

  render() {
    return (
      <section className="section section-lrc-info is-large has-background-grey">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>Buy to Invest</h1>
            </div>
          </div>

          {/* ---*/}

          <div className="columns is-centered is-multiline">
            <div className="column column-info is-5 has-text-left">
              <div data-aos="fade-up" className="content">
                <h2>Token Information</h2>
                <ul>
                  {this.state.facts.map((item, idx) => (
                    <li key={idx}>
                      <span className="has-leading-thin-arrow key">
                        {item.key}:{' '}
                      </span>
                      <span className="tag value">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" className="content">
                <h2>Regarding LRC Token Migration</h2>
                <p className="has-text-justify">
                  On May 07 2019, we migrated LRC from{' '}
                  <a
                    className="highlight has-trailing-arrow"
                    href="https://etherscan.io/token/0xef68e7c694f40c8202821edf525de3782458639f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    version 1.0
                  </a>{' '}
                  to version 2.0. The new LRC token remains ERC20 compliant and
                  now supports a “burn” function that will be used by the
                  Loopring Protocol and the new{' '}
                  <a
                    href="https://medium.com/loopring-protocol/oedax-looprings-open-ended-dutch-auction-exchange-model-d92cebbd3667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight has-trailing-arrow"
                  >
                    Oedax
                  </a>{' '}
                  auction protocol to burn LRC as the protocols are being used.
                  The total LRC supply will decrease over time to reflect these
                  burns.
                </p>

                <p>
                  To learn more about the migration, please check out our{' '}
                  <a
                    className="highlight has-trailing-arrow"
                    href="https://medium.com/loopring-protocol/lrc-token-upgraded-a26ee6f87b84"
                  >
                    blog post
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="column column-exchange  is-5 has-text-left">
              <div data-aos="fade-up" className="content">
                <h2>Exchanges</h2>
                <ul>
                  {this.state.exchanges.map((exchange, idx) => (
                    <li key={idx}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={exchange.url}
                      >
                        <span className="has-leading-thin-arrow exchange-name">
                          {exchange.name}
                        </span>
                        {exchange.pairs.map((token, idx) => (
                          <span key={idx} className="tag">
                            LRC/{token}
                          </span>
                        ))}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" className="content">
                <h2>Coming Soon...</h2>
                <ul>
                  <li className="coming-soon highlighted">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wedex.io"
                    >
                      <span className="has-leading-thin-arrow exchange-name">
                        WeDEX
                      </span>
                      <span className="tag">LRC/ETH</span>
                      <span className="tag">LRC/USDT</span>
                    </a>
                    <div className="footnote">
                      WeDEX will be the first DEX built on top of Loopring 3.0.
                      It is owned and will be run by an independent third-party.
                    </div>
                  </li>
                  <li className="coming-soon ">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://UpDEX.io"
                    >
                      <span className="has-leading-thin-arrow exchange-name">
                        UpDEX
                      </span>
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

export default withLocalize(TokenInfoSection);
