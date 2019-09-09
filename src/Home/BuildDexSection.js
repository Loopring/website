import React from "react";

import englishTranslation from "./i18n/BuildDexSection.en.json";
import chineseTranslation from "./i18n/BuildDexSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./BuildDexSection.scss";

class BuildDexSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-build-dex is-large has-background-blue">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-12 is-centered is-vcentered has-text-centered"
              >
                <h1 className="build-title">{this.state.I.heading}</h1>
              </div>
              <div className="column is-12 is-centered is-vcentered has-text-centered">
                <div className="outer-container">
                  <div
                    data-aos="fade-up"
                    className="inner-container has-text-centered"
                  >
                    <h2>
                      <span className="heading-number">1 /</span>{" "}
                      {this.state.I.option1.title}
                    </h2>
                    <div class="details has-text-left">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.I.option1.details
                        }}
                      />
                    </div>
                    <a
                      href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/BACKEND.md"
                      class="button is-outlined left"
                    >
                      {this.state.I.option1.action}
                    </a>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="inner-container  has-text-centered right"
                  >
                    <h2>
                      <span className="heading-number">2 /</span>{" "}
                      {this.state.I.option2.title}
                    </h2>
                    <div class="details has-text-left">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.I.option2.details
                        }}
                      />
                    </div>
                    <a
                      href="https://lightcone.io"
                      class="button is-outlined right"
                    >
                      {this.state.I.option2.action}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BuildDexSection;
