import React from "react";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./HeroSection.scss";

class HeroSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  getBackgroundImg() {
    const bgMap = {
      all: "/images/bg1.jpeg",
      biweekly: "/images/bg2.jpeg",
      loopring3_0: "/images/bg3.jpeg",
      learning: "/images/bg4.jpeg",
      thoughts: "/images/bg5.jpeg",
      news: "/images/bg6.jpeg"
    };
    return bgMap[this.props.group];
  }

  render() {
    const divStyle = {
      backgroundImage: "url(" + this.getBackgroundImg() + ")"
    };

    return (
      <section
        data-aos="fade-zoom-in"
        className="section section-updates-hero is-medium has-background-white"
        style={divStyle}
      >
        <div className="columns is-multiline">
          <div className="column is-12 is-unselectable hero has-text-din">
            <div className="container">
              <h1
                dangerouslySetInnerHTML={{
                  __html: this.state.I.headings[this.props.group]
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
