import React from 'react';
import './PerformanceSection.scss';

import '../../node_modules/aos/dist/aos.css';

import Odometer from 'react-odometerjs';
import AOS from 'aos';

class PerformanceSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      throughput: 100,
      cost: '0.002',
    };
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  componentDidMount() {
    this.timer = setTimeout((data) => this.setState({throughput: 350}), 50);
    // this.timer = setTimeout(data => this.setState({ cost: 0.002 }), 1000);
  }

  render() {
    return (
      <div>
        <section className="section section-protocol-throughput is-large  has-background-grey">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5  has-text-centered"
              >
                <h1>Remarkable Throughput</h1>
                <Odometer value={this.state.throughput} format="(,ddd)" />
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-left"
              >
                <p>
                  Loopring 3.0 can settle up to 350 trades per second while
                  guarantees the same level of security as the underlying
                  Ethereum blockchain. This is powered by a zkRollup feature
                  called <b>On-Chain Data Availability</b>, or <b>OCDA</b>. If
                  OCDA is disabled, Loopring provides consortium-level security,
                  and its throughput will be much higher, as shown in the
                  following table.
                </p>
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th className="first"></th>
                      <th>Throughput with OCDA</th>
                      <th>Throughput without OCDA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="first">Currently</td>
                      <td>
                        <span className="highlighted">350</span>
                      </td>
                      <td>
                        <span className="highlighted">6,900</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="first">Post-Istanbul Fork</td>
                      <td>
                        <span className="highlighted">1,400</span>
                      </td>
                      <td>
                        <span className="highlighted">10,500</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <ul className="links">
                  <li>
                    <a disabled className="has-leading-thick-arrow highlight">
                      Loopring 3.0 Smart Contracts·············the on-chain part{' '}
                      <span className="symboled">⟁</span>
                    </a>
                  </li>
                  <li>
                    <a disabled className="has-leading-thick-arrow highlight">
                      Loopring 3.0 ZKP circuits·····················the
                      off-chain part <span className="symboled"> ⧉</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-protocol-cost is-large has-background-black">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5  has-text-centered"
              >
                <h1>Low Settlement Cost</h1>
                <Odometer
                  theme="white"
                  format="(ddd).dddd"
                  value={this.state.cost}
                />
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-left"
              >
                <p>
                  The average settlement cost for each trade is as low as 0.004
                  USD, which covers the gas for Ethereum transactions and the
                  cost of proof generation on cloud computing platforms. DEXes
                  can further lower the settlement cost by using cheaper servers
                  in the cloud and GPU-based algorithms. To put things into
                  perspective, most brokers' stock trading fees in the US are in
                  the range of 2 to 7 USD per trade.
                </p>
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th className="first"></th>
                      <th>Cost per Trade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="first">Currently</td>
                      <td>
                        <span className="">$0.004</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="first">Post-Istanbul Fork</td>
                      <td>
                        <span className="">$0.003</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <ul className="links">
                  <li>
                    <a disabled className="has-leading-thick-arrow">
                      Loopring 3.0 Smart Contracts·············the on-chain part{' '}
                      <span className="symboled">⟁</span>
                    </a>
                  </li>
                  <li>
                    <a disabled className="has-leading-thick-arrow">
                      Loopring 3.0 ZKP circuits·····················the
                      off-chain part <span className="symboled"> ⧉</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PerformanceSection;
