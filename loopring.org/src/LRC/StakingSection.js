import React from "react";

import englishTranslation from "./i18n/StakingSection.en.json";
import chineseTranslation from "./i18n/StakingSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./StakingSection.scss";

class StakingSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-lrc-staking is-large has-background-primary-dark">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>{this.state.I.heading}</h1>
              {/* Unlike many other projects, Loopring's utility token LRC is no longer a fee token.*/}
            </div>
          </div>

          {this.state.I.utilities.map((item, idx) => (
            <div key="idx" className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column  is-2 has-text-right has-text-centered-mobile"
              >
                <div className="content">
                  <div className="category has-text-centered is-centered is-unselectable">
                    {item.symbol}
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="column is-4  has-text-left">
                <h2>{item.title}</h2>
                <p className="has-text-justify">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default StakingSection;
