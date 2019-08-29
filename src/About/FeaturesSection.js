import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/FeaturesSection.en.json';
import chineseTranslation from './i18n/FeaturesSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './FeaturesSection.scss';

class FeaturesSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-about-features is-large has-background-white">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>
                <Translate id="headingFeatures" />
              </h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns is-multiline">
            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 1.0 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag highlight">Ring-Matching</span>
              <span className="tag highlight">Order-Sharing</span>
              <span className="tag highlight">Non-Custodial</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 1.5 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">Ring-Matching</span>
              <span className="tag ">Order-Sharing</span>
              <span className="tag">Non-Custodial</span>
              <span className="tag highlight">Dual-Authoring</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 2.0 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">Ring-Matching</span>
              <span className="tag">Order-Sharing</span>
              <span className="tag">Non-Custodial</span>
              <span className="tag">Dual-Authoring</span>
              <span className="tag highlight">Any-Token-As-Fee</span>
              <span className="tag highlight">LRC-Burning</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow">Loopring 3.0</span>{' '}
              ···························
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
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
    );
  }
}

export default withLocalize(FeaturesSection);
