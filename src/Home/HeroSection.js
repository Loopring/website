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
    const title = this.isChinese() ? "路印协议" : "Loopring";
    const titleClass = this.isChinese() ? "chinese" : "";
    const subTitle = this.isChinese()
      ? "高性能去中心化交易协议"
      : "An Open Protocol for Scalable, Non-Custodial Exchanges";

    return (
      <section className="section section-about-hero is-large">
        <div className="backdrop"></div>

        <div className="text">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />

                <text className={titleClass} id="title" x="50%" y="30%">
                  {title}
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>

          <div className="subtitle">{subTitle}</div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
