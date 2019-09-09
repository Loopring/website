import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/FeaturesSection.en.json";
import chineseTranslation from "./i18n/FeaturesSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./FeaturesSection.scss";

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
                <Translate id="loopring" /> 1.0 <Translate id="deprecated" />
              </span>
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag highlight">
                <Translate id="features.ringMatching" />
              </span>
              <span className="tag highlight">
                <Translate id="features.orderSharing" />
              </span>
              <span className="tag highlight">
                <Translate id="features.nonCustodial" />
              </span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                <Translate id="loopring" /> 1.5 <Translate id="deprecated" />
              </span>
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">
                <Translate id="features.ringMatching" />
              </span>
              <span className="tag ">
                <Translate id="features.orderSharing" />
              </span>
              <span className="tag">
                <Translate id="features.nonCustodial" />
              </span>
              <span className="tag highlight">
                <Translate id="features.dualAuthoring" />
              </span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                <Translate id="loopring" /> 2.0 <Translate id="deprecated" />
              </span>
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">
                <Translate id="features.ringMatching" />
              </span>
              <span className="tag">
                <Translate id="features.orderSharing" />
              </span>
              <span className="tag">
                <Translate id="features.nonCustodial" />
              </span>
              <span className="tag">
                <Translate id="features.dualAuthoring" />
              </span>
              <span className="tag highlight">
                <Translate id="features.anyTokenAsFee" />
              </span>
              <span className="tag highlight">
                <Translate id="features.lrcBurning" />
              </span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow">Loopring 3.0</span>{" "}
              ···························
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag deprecated">
                <Translate id="features.ringMatching" />
              </span>
              <span className="tag deprecated">
                <Translate id="features.orderSharing" />
              </span>
              <span className="tag">
                <Translate id="features.nonCustodial" />
              </span>
              <span className="tag deprecated">
                <Translate id="features.dualAuthoring" />
              </span>
              <span className="tag deprecated">
                <Translate id="features.anyTokenAsFee" />
              </span>
              <span className="tag">
                <Translate id="features.lrcBurning" />
              </span>
              <span className="tag highlight">
                <Translate id="features.tradeTokenAsFee" />
              </span>
              <span className="tag highlight">zkRollup</span>
              <span className="tag highlight">
                <Translate id="features.lrcStaking" />
              </span>
              <span className="tag highlight">
                <Translate id="features.highThroughput" />
              </span>
              <span className="tag highlight">
                <Translate id="features.lowCost" />
              </span>
              <span className="tag highlight">
                <Translate id="features.upgradability" />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(FeaturesSection);
