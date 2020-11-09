import React from "react";

import englishTranslation from "./i18n/FeatureSection.en.json";
import chineseTranslation from "./i18n/FeatureSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./FeatureSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
              <div
                data-aos="fade-up"
                className="column is-centered is-vcentered has-text-centered"
              >
                <h1 className="sectionTitle">{this.state.I.heading1}</h1>
                <h2 className="sectionTitle">{this.state.I.heading2}</h2>
                <h3 className="sectionTitle">{this.state.I.heading3}</h3>
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
                      <img
                        draggable="false"
                        src={"/images/feature_A" + (idx + 1) + ".jpg"}
                      />
                    </figure>
                    <h1 className="feature">{feature.title}</h1>
                    <div className="explain has-text-centered">
                      {feature.explain}{" "}
                    </div>{" "}
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
