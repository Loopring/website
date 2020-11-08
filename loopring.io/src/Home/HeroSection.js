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
    const title = this.isChinese() ? "路印钱包" : "Loopring Wallet";
    const titleClass = this.isChinese() ? "chinese" : "";
    const subTitle = this.isChinese()
      ? "支持二层扩容的以太坊智能钱包"
      : "Ethereum Smart Wallet with zkRollup";

    return (
      <section
        className={
          "section section-about-hero is-large has-background-primary " +
          titleClass
        }
      >
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div
              data-aos="fade-up"
              className="column is-centered is-vcentered has-text-centered"
            >
              <div className="title">{title}</div>

              <div className="subtitle">{subTitle}</div>

              <a
                href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/BACKEND.md"
                className="button is-medium has-background-white is-primary"
              >
                点击下载
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
