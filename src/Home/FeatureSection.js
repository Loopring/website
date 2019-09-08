import React from "react";

import englishTranslation from "./i18n/FeatureSection.en.json";
import chineseTranslation from "./i18n/FeatureSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./FeatureSection.scss";

class FeatureSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-features is-large">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              {this.state.I.features.map((feature, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="column is-4 is-centered is-vcentered has-text-centered"
                >
                  <div className="content">
                    <figure className="image">
                      <img src={"/images/third" + idx + ".gif"} />
                    </figure>
                    <h1>{feature.title}</h1>
                    <div className="explain has-text-left">
                      {feature.explain}{" "}
                    </div>{" "}
                    <a href="/#/protocol" className="learn-more">
                      {this.state.I.learnMore}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeatureSection;
