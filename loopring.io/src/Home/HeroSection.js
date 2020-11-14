import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./HeroSection_en.json";
import chineseTranslation from "./HeroSection_zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";
import Section from "../Components/Section";

import "./HeroSection.scss";

class HeroSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const titleClass = this.isChinese() ? "chinese" : "";

    return (
      <div>
        <Section classes="describe">
          <div className="title">{this.state.I.title}</div>
          <div className="subtitle">{this.state.I.subtitle}</div>

          <a
            href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/BACKEND.md"
            className="button is-medium has-background-white is-primary"
          >
            点击下载（安卓版）
          </a>
        </Section>

        <Section classes="screenshot1">
          {" "}
          <figure class="image screnshot1">
            <img src="/images/hero-screenshot.png" />
          </figure>
        </Section>
      </div>
    );
  }
}

export default withLocalize(HeroSection);
