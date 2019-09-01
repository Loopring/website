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
    // console.log("HeroSection props", this.props.group,  this.state.I, this.state.I[this.props.group]);
    return (
      <section className="section section-updates-hero is-large has-background-white">
        <div className="columns is-multiline">
          <div className="column is-12 is-unselectable hero has-text-din">
            <div className="container">
              <div data-aos="fade-up" className="text">
                <h1>{this.state.I.headings[this.props.group]}</h1>
              </div>
              <div data-aos="fade-up" className="text smaller"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
