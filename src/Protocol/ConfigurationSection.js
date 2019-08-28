import React from 'react';
import './ConfigurationSection.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
const API = './json_en/configs.json';

class ConfigurationSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      constants: [],
      dexParams: [],
      onchainParams: [],
      offchainParams: [],
    };
    AOS.init();
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            constants: data.constants,
            dexParams: data.dexParams,
            onchainParams: data.onchainParams,
            offchainParams: data.offchainParams,
          })
        );
  }

  render() {
    return (
      <section className="section section-protocol-configuration is-large has-background-grey">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <h1>DEX Configuration</h1>
            </div>{' '}
          </div>

          {/* ---*/}
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>Global Constants</h2>
                <div className="remark">
                  <i>
                    A list of protocol-wise constants that will never be
                    changed.
                  </i>
                </div>
                <ul>
                  {this.state.constants.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow">
                        <span className="name">{item.name}</span>{' '}
                        <span className="tag">
                          {item.type}: {item.value}
                        </span>
                      </div>
                      <div className="meaning">{item.meaning}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>DEX Settings</h2>
                <div className="remark">
                  <i>
                    A list of DEX-wise constants whose values are fixed once the
                    DEX is forged.
                  </i>
                </div>
                <ul>
                  {this.state.dexParams.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow">
                        <span className="name">{item.name}</span>{' '}
                        <span className="tag">
                          {item.type}: {item.value}
                        </span>
                      </div>
                      <div className="meaning">{item.meaning}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="content">
                <h2>DEX On-Chain Parameters</h2>
                <div className="remark">
                  <i>
                    A list of DEX-wise smart contract parameters whose values
                    can only be changed by DEX owners.
                  </i>
                </div>
                <ul>
                  {this.state.onchainParams.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow">
                        <span className="name">{item.name}</span>{' '}
                        <span className="tag">
                          {item.type}: {item.value}
                        </span>
                      </div>
                      <div className="meaning">{item.meaning}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="content">
                <h2>DEX off-Chain Parameters</h2>
                <div className="remark">
                  <i>
                    A list of DEX-wise circuit parameters whose values can only
                    be changed by DEX operators very frequently, e.g. per order
                    and/or user request.
                  </i>
                </div>
                .
                <ul>
                  {this.state.offchainParams.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow">
                        <span className="name">{item.name}</span>{' '}
                        <span className="tag">
                          {item.type}: {item.value}
                        </span>
                      </div>
                      <div className="meaning">{item.meaning}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ConfigurationSection;
