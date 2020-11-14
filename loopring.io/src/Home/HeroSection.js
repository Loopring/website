import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./HeroSection_en.json";
import chineseTranslation from "./HeroSection_zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./HeroSection.scss";

class HeroSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const titleClass = this.isChinese() ? "chinese" : "";

    return (
      <div>
        <section
          className={
            "section section-hero is-small has-background-primary " + titleClass
          }
        >
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-centered is-vcentered has-text-centered"
              >
                <div className="title">{this.state.I.title}</div>
                <div className="subtitle">{this.state.I.subtitle}</div>

                <a
                  href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/BACKEND.md"
                  className="button is-medium has-background-white is-primary"
                >
                  点击下载（安卓版）
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className={
            "section section-screenshot1 is-small has-background-primary " +
            titleClass
          }
        >
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-centered is-vcentered has-text-centered"
              >
                <figure class="image screnshot1">
                  <img src="/images/hero-screenshot.png" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withLocalize(HeroSection);
