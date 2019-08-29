import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/ConfigurationSection.en.json';
import chineseTranslation from './i18n/ConfigurationSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './ConfigurationSection.scss';

const API = './json_en/configs.json';

class ConfigurationSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
    this.state = {
      constants: [],
      dexParams: [],
      onchainParams: [],
      offchainParams: [],
    };
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
              <h1>
                <Translate id="headingConfig" />
              </h1>
            </div>{' '}
          </div>

          {/* ---*/}
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>
                  <Translate id="configTitles.global" />
                </h2>
                <div className="remark">
                  A list of protocol-wise constants that will never be changed.
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
                <h2>
                  <Translate id="configTitles.initial" />
                </h2>
                <div className="remark">
                  A list of per-DEX constants whose values are fixed once the
                  DEX is forged.
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
                <h2>
                  <Translate id="configTitles.onchain" />
                </h2>
                <div className="remark">
                  A list of DEX smart contract parameters whose values can only
                  be changed by the DEX owner.
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
                <h2>
                  <Translate id="configTitles.offchain" />
                </h2>
                <div className="remark">
                  A list of DEX circuit parameters whose values can only be
                  changed by DEX operators very frequently, e.g. per order,
                  token, trading-pair, or even per-trade. The maximum values are
                  0.63% in steps of 0.01% (1 bips)
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

export default withLocalize(ConfigurationSection);
