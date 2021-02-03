import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./HeroSection.scss";

class HeroSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }
  render() {
    const url = this.isChinese()
      ? "https://loopring.org/#/post/lrc-tokenomics-v2-zh"
      : "https://medium.com/loopring-protocol/lrc-tokenomics-v2-1e6fd99e9e9c?source=collection_home---4------0-----------------------";
    return (
      <section className="section section-lrc-hero is-large has-background-white">
        <div className="columns is-multiline">
          <div className="column is-12 is-unselectable hero has-text-din">
            <div className="container">
              <div data-aos="fade-up" className="text symbol">
                <a href={url} targe="_blank">
                  <Translate id="tokenomics_v2" />
                </a>
              </div>
              {/*       <div data-aos="fade-up" className="text smaller">
                <Translate id="buyAndStakeTo" />
              </div>*/}
            </div>
          </div>
        </div>

        {/* <div className="columns is-centered is-vcentered">
          <div className="column is-centered is-vcentered has-text-centered is-12">
            <a
              href="https://staking.loopring.org"
              target="_blank"
              className="stake-now"
            >
              <Translate id="stakeNow" />
            </a>
          </div>
        </div>*/}
      </section>
    );
  }
}

export default withLocalize(HeroSection);
