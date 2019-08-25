import React from 'react';

import './LRC.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class LRC extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="section is-large has-background-white section-lrc-hero">
          <div className="columns is-multiline">
            <div className="column is-12 is-unselectable hero">
              <div className="container">
                <div data-aos="fade-up" className="text">
                  Buy and stake <span className="symbol">LRC</span>
                </div>
                <div data-aos="fade-up" className="text smaller">
                  to capture the growing value of Loopring's ecosystem.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lrc-icon   has-text-black has-background-white">
          <div className="container is-centered has-text-centered">
            <div className="columns is-unselectable is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 has-text-centered"
              >
                <figure className="image lrc-logo">
                  <img
                    draggable="false"
                    className="is-rounded"
                    src="images/lrc.svg"
                  />
                </figure>{' '}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lrc-utilities is-large has-text-white has-background-black">
          <div className="container is-centered has-text-centered">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-10 has-text-centered"
              >
                <h1>The Utility</h1>
                {/* Unlike many other projects, Loopring's utility token LRC is no longer a fee token.*/}
              </div>
            </div>

            <div className="columns is-centered is-multiline">
              <div data-aos="fade-up" className="column  is-2 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">☉</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  <h2>1/4 Stake LRC to Earn Protocol Fees, by Holders</h2>
                  <p>
                    Every LRC holder can stake LRC to earn part of 70% of the
                    protocol fees of all exchanges built on top of Loopring —
                    20% will fund the Loopring DAO and the remaining 10% will be
                    burned.
                  </p>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-2 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">☐</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  <h2>
                    2/4 Stake LRC to Build p DEX Reputation, by DEX Owners
                  </h2>
                  <p>
                    An exchange owner needs to stake LRC for economic security
                    and builing up its reputation.
                  </p>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-2 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">⟁</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  <h2>3/4 Stake LRC to Lower Protocol Fees, by DEX Owners</h2>
                  <p>
                    LRC can be staked to lower the protocol fees on a specific
                    exchange by an exchange owner, market makers and
                    high-frequency traders.
                  </p>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-2 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">∖</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  <h2>4/4 Stake LRC to Lower Protocol Fees, by Traders</h2>
                  <p>
                    LRC can be staked to lower the protocol fees on a specific
                    exchange by an exchange owner, market makers and
                    high-frequency traders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default LRC;
