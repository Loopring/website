import React from 'react';
import './SectionLoopringHistory.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

class SectionLoopringHistory extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <section className="section section-history is-large has-text-black has-background-blue">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column is-10 has-text-left">
                <h1>Version History</h1>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              <div data-aos="fade-up" className="column  is-5 has-text-left">
                <div className="content">
                  <p>
                    We started the project in June, 2017, until this date we
                    have released 4 major versions of the Loopring protocol.
                  </p>
                  <h2> </h2>
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
                <figure className="image covered is-3by2">
                  <img src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                </figure>
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
              <div
                data-aos="fade-up"
                className="column version30 has-shaddow is-6 has-background-black has-text-white  has-text-left"
              >
                <div className="content">
                  <h2>Loopring 3.0, Reimagined.</h2>

                  <p>
                    Loopring 3.0 is our newest, fastest, and most
                    forward-looking protocol. It provides a solution for the
                    most outstanding challenge of all decentralized protocols —
                    performance, or more precisely,{' '}
                    <b>much higher performance without tradeoff in security</b>.
                  </p>
                  <p>
                    There are, however, some tradeoffs in other aspects. For
                    example, orders are no longer sharable among multiple
                    exchanges and have to be matched by a dedicated relayer.
                    Crypto assets have to be deposited into a smart contract
                    before orders can use them. One benefit of these tradeoffs
                    is that the new user experience is more comparable to
                    centralized exchanges.
                  </p>

                  <p>
                    <a className="highlight" href="/protocol">
                      Click here↗
                    </a>{' '}
                    to learn about the technical details of Loopring 3.0.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-features is-large has-text-black has-background-white">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column is-10 has-text-right">
                <h1>Features</h1>
              </div>
            </div>
            <div className="columns is-multiline">
              <div
                data-aos="fade-up"
                className="column is-2 is-offset-2 has-text-left"
              >
                ➜ <span className="deprecated">Loopring 1.0 (deprecated)</span>{' '}
                ······
              </div>
              <div data-aos="fade-up" className="column is-6 has-text-left">
                <span className="tag highlight">Ring-Matching</span>
                <span className="tag highlight">Order-Sharing</span>
                <span className="tag highlight">Non-Custodial</span>
              </div>

              <div
                data-aos="fade-up"
                className="column is-2 is-offset-2 has-text-left"
              >
                ➜ <span className="deprecated">Loopring 1.5 (deprecated)</span>{' '}
                ······
              </div>
              <div data-aos="fade-up" className="column is-6 has-text-left">
                <span className="tag">Ring-Matching</span>
                <span className="tag ">Order-Sharing</span>
                <span className="tag">Non-Custodial</span>
                <span className="tag highlight">Dual-Authoring</span>
              </div>

              <div
                data-aos="fade-up"
                className="column is-2 is-offset-2 has-text-left"
              >
                ➜ <span className="deprecated">Loopring 2.0 (deprecated)</span>{' '}
                ······
              </div>
              <div data-aos="fade-up" className="column is-6 has-text-left">
                <span className="tag">Ring-Matching</span>
                <span className="tag">Order-Sharing</span>
                <span className="tag">Non-Custodial</span>
                <span className="tag">Dual-Authoring</span>
                <span className="tag highlight">Any-Token-As-Fee</span>
                <span className="tag highlight">LRC-Burning</span>
              </div>

              <div
                data-aos="fade-up"
                className="column is-2 is-offset-2 has-text-left"
              >
                ➜ <span className="">Loopring 3.0</span>{' '}
                ···························
              </div>
              <div data-aos="fade-up" className="column is-6 has-text-left">
                <span className="tag deprecated">Ring-Matching</span>
                <span className="tag deprecated">Order-Sharing</span>
                <span className="tag deprecated">Non-Custodial</span>
                <span className="tag deprecated">Dual-Authoring</span>
                <span className="tag deprecated">Any-Token-as-Fee</span>
                <span className="tag">LRC-Burning</span>
                <span className="tag highlight">Custodial-in-Contract</span>
                <span className="tag highlight">Trade-Token-as-Fee</span>
                <span className="tag highlight">zkRollup</span>
                <span className="tag highlight">LRC-Staking</span>
                <span className="tag highlight">High-Throughtput</span>
                <span className="tag highlight">Low-Cost</span>
                <span className="tag highlight">Upgradability</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionLoopringHistory;
