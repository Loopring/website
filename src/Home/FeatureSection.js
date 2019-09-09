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
        <section className="section section-features is-large has-background-primary-dark">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-centered is-vcentered has-text-centered"
              >
                <h1>{this.state.I.heading}</h1>
              </div>
            </div>
            <div className="columns is-centered is-vcentered">
              {this.state.I.features.map((feature, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="column is-4 is-centered is-vcentered has-text-centered"
                >
                  <div className="content">
                    <figure className="image">
                      <img src={"/images/" + idx + ".svg"} />
                    </figure>
                    <h1 className="feature">{feature.title}</h1>
                    <div className="explain has-text-left">
                      {feature.explain}{" "}
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>
            <div className="columns is-centered is-vcentered">
              <div className="column is-centered is-vcentered has-text-centered is-12">
                <a href="/#/protocol" className="learn-more">
                  {this.state.I.learnMore}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeatureSection;
