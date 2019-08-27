import React from 'react';

import './SectionLRCStaking.scss';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class SectionLRCStaking extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-lrc-staking is-large  has-background-black">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>Utility & Staking</h1>
              {/* Unlike many other projects, Loopring's utility token LRC is no longer a fee token.*/}
            </div>
          </div>

          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column  is-2 has-text-right has-text-centered-mobile"
            >
              <div className="content">
                <div className="category is-unselectable">☉</div>
              </div>
            </div>

            <div data-aos="fade-up" className="column  is-4 has-text-left">
              <div className="content">
                <h2>1/ Earn Protocol Fees, by Holders</h2>
                <p>
                  Every LRC holder can stake LRC to earn part of 70% of the
                  protocol fees of all exchanges built on top of Loopring — 20%
                  will fund the Loopring DAO and the remaining 10% will be
                  burned.
                </p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column  is-2 has-text-right has-text-centered-mobile"
            >
              <div className="content">
                <div className="category is-unselectable">☐</div>
              </div>
            </div>

            <div data-aos="fade-up" className="column  is-4 has-text-left">
              <div className="content">
                <h2>2/ Build up DEX Reputation, by DEX Owners</h2>
                <p>
                  An exchange owner needs to stake LRC for economic security and
                  builing up its reputation.
                </p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column  is-2 has-text-right has-text-centered-mobile"
            >
              <div className="content">
                <div className="category is-unselectable">⟁</div>
              </div>
            </div>

            <div data-aos="fade-up" className="column  is-4 has-text-left">
              <div className="content">
                <h2>3/ Lower Protocol Fees, by DEX Owners</h2>
                <p>
                  LRC can be staked to lower the protocol fees on a specific
                  exchange by an exchange owner, market makers and
                  high-frequency traders.
                </p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column  is-2 has-text-right has-text-centered-mobile"
            >
              <div className="content">
                <div className="category is-unselectable">∖</div>
              </div>
            </div>

            <div data-aos="fade-up" className="column  is-4 has-text-left">
              <div className="content">
                <h2>4/ Lower Protocol Fees, by Traders</h2>
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
    );
  }
}

export default SectionLRCStaking;
