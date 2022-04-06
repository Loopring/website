import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled/";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import I18nComponent from "../Components/I18nComponent";
import { DropDownIcon } from "../Components/Icon";

import "./HeroSection.scss";

const ButtonStyled = styled(Button)`
  :hover {
    color: #ffffff;
  }

  :hover:before {
    background: rgba(255, 255, 255, 0.2);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

class HeroSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const subTitle3 = this.isChinese() ? "路印提供" : "Loopring offers";
    const title = this.isChinese()
      ? "以太第一个zkRollup二层"
      : "Ethereum's First zkRollup Layer2";
    const titleClass = this.isChinese() ? "chinese" : "";
    const subTitle1 = this.isChinese()
      ? "在以太坊 Layer 2 上交易，费用减少 100 倍"
      : "Trade on Ethereum Layer 2 with 100X less fees";
    const subTitle2 = this.isChinese()
      ? "- 更快、更安全"
      : "- faster and superb securer";

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
              <div className="subtitle2">{subTitle2}</div>
              <ButtonStyled
                className="button"
                variant={"contained"}
                fullWidth={true}
                size={"large"}
                onClick={() => {
                  window.open("https://loopring.io/#/trade/lite/LRC-ETH");
                }}
              >
                <div>LAUNCH APP</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DropDownIcon
                    style={{ transform: "rotate(-90deg) scale(1.1)" }}
                  />
                </div>
              </ButtonStyled>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
