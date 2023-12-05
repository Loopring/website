import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import I18nComponent from "../Components/I18nComponent";
import { DropDownIcon } from "../Components/Icon";
import { LaunchAppButtonButtonStyled } from "../Components/LaunchAppButton";

import "./HeroSection.scss";

class HeroSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const subTitle3 = this.isChinese() ? "路印提供" : "Loopring offers";
    const title = this.isChinese()
      ? "以太第一个zkRollup二层"
      : "Ethereum's First zkRollup Layer 2";
    const titleClass = this.isChinese() ? "chinese" : "";
    const subTitle1 = this.isChinese()
      ? "在以太坊 Layer 2 上交易，费用减少 100 倍"
      : "Fast, Secure and 100x Lower Fees";

    return (
      <section
        className={
          "section section-about-hero is-large has-background-primary-white " +
          titleClass
        }
      >
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div
              data-aos="fade-up"
              className="column is-centered is-vcentered has-text-centered"
            >
              <div className="subtitle3">{subTitle3}</div>
              <div className="title">{title}</div>
              <div className="subtitle1">{subTitle1}</div>
              <LaunchAppButtonButtonStyled
                variant={"contained"}
                fullWidth={true}
                size={"large"}
                onClick={() => {
                  window.open("https://loopring.io");
                }}
              >
                <div>LAUNCH APP</div>
                <div>
                  <DropDownIcon
                    style={{ transform: "rotate(-90deg) scale(1.1)" }}
                  />
                </div>
              </LaunchAppButtonButtonStyled>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
