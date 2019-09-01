import React from "react";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./HeroSection.scss";

class HeroSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-updates-hero is-medium has-background-white">
        <div className="columns is-multiline">
          <div className="column is-12 is-unselectable hero has-text-din">
            <div className="container">
              <div className="text">
                <h1>{this.state.I.headings[this.props.group]}</h1>
              </div>
              <div className="text smaller"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
