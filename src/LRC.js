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
              <div data-aos="fade-up" className="column is-10 has-text-left">
                <h1>Utilities</h1>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              <div data-aos="fade-up" className="column  is-5 has-text-left">
                <div className="content">
                  <h2> Loopring 1.0</h2>
                  <p>
                    Loopring 1.0 introduced the <i>Ring-Matching</i> concept —
                    in one trade, up to 12 orders can circularly swap
                    crypto-assets in the form of <i>ring</i>s. This feature is
                    unique and brings the potential for improved price discovery
                    and higher trading volume.
                  </p>
                  <p>
                    Our project name "Loopring" actually comes after this
                    feature.
                  </p>
                  <p>
                    With 1.0, orders are managed and matched off-chain. The
                    protocol's smart contracts verify order signatures, trading
                    prices, and settlement amounts on-chain and perform token
                    transfers for each order accordingly. Because of the
                    off-chain order management and matching, the performance of
                    Loopring 1.0 is better than that of EtherDelta and the like.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-5 has-text-left">
                <div className="content">
                  <h2> Loopring 1.5</h2>

                  <p>
                    Loopring 1.5 introduced another unique feature called{' '}
                    <i>Dual Authoring</i> to prevent front-running. Each order
                    has a randomly generated DA key-pair — the public key is
                    part of the order; the private key is not part of the order
                    but is sent to the relayer so that the relayer can and must
                    use it to sign rings that include the order.
                  </p>
                  <p>
                    Dual Authoring effectively prevents pending settlements and
                    their orders from being stolen by middlemen in the Ethereum
                    network, as those middlemen have no access to the orders' DA
                    private keys.
                  </p>
                  <p>
                    Dual Authoring comes very handy for scenarios where orders
                    can be matched by more than one exchange/relayer.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-5  has-text-left">
                <div className="content">
                  <h2> Loopring 2.0</h2>

                  <p>
                    With the 2.0 release, Loopring no longer requires traders to
                    pay relayers LRC, Loopring's utility token, as the trading
                    fee. The trading fees can be paid using any ERC-20 tokens
                    that relayers specify. Relayers only have to use a
                    percentage, known as the burn-rate, of their fee income to
                    buy LRC to burn (so LRC's total supply is ever decreasing).
                    Different tokens have varying burn-rates, and the burn rates
                    for LRC and WETH are the lowest, which makes paying in LRC
                    and Ether the most cost-efficient.
                  </p>
                  <p>
                    This <i>Any-Token-As-Fee</i> feature not only significantly
                    reduces frictions in user experience, but also enables
                    decentralized exchanges to use own their platform token as
                    the fee token.
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
