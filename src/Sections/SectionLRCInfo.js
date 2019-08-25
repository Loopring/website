import React from 'react';

import './SectionLRCInfo.scss';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

const API = './exchanges.json';

class SectionLRCInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exchanges: [],
    };
    AOS.init();
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) => this.setState({exchanges: data.exchanges}));
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-lrc-info is-large has-background-grey">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>Trade LRC</h1>
            </div>
          </div>

          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column column-exchange  is-5 has-text-left"
            >
              <div className="content">
                <h2>Token Information</h2>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="column column-exchange  is-5 has-text-left"
            >
              <div className="content">
                <h2>Exchanges</h2>
                <ul>
                  {this.state.exchanges.map((exchange) => (
                    <li>
                      ⟶{' '}
                      <a target="_blank" href={exchange.url}>
                        <span className="exchange-name">{exchange.name}</span>
                        {exchange.pairs.map((token) => (
                          <span className="tag">LRC/{token}</span>
                        ))}
                      </a>
                    </li>
                  ))}
                </ul>
                <h2>Coming soon...</h2>
                <ul>
                  <li className="coming-soon highlight">
                    ⟶{' '}
                    <a target="_blank" href="https://wedex.io">
                      <span className="exchange-name">WeDEX </span>
                      <span className="tag">LRC/ETH</span>
                      <span className="tag">LRC/USDT</span>
                    </a>
                    <div className="footnote">
                      WeDEX will be the first DEX built on top of Loopring 3.0.
                      It will be run by an independent third-party.
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
