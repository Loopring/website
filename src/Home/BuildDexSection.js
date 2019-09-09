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
                    data-aos="fade-right"
                    className="inner-container has-text-centered"
                  >
                    <h2>
                      <span className="heading-number">1 /</span> Develop my own
                      relayer
                    </h2>
                    <div class="details has-text-left">
                      <p>
                        You can choose to build your very own relayer backend
                        system for your exchange by following Loopring's
                        protocol rules. We strongly encourage you to go through
                        our{" "}
                        <a
                          className="underline"
                          href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md"
                        >
                          Design Doc
                        </a>{" "}
                        and checkout the backend-specific documentation.
                      </p>
                    </div>
                    <a class="button is-outlined left">
                      Check out documentation →
                    </a>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="inner-container  has-text-centered right"
                  >
                    <h2>
                      <span className="heading-number">2 /</span> Use
                      Lightcone's relayer service
                    </h2>
                    <div class="details has-text-left">
                      <p>
                        You may also consider uing Lightcone Technology's
                        production-ready Relayer-as-a-Service. Adopting a
                        third-party relayer will allow you launch a DEX quickly
                        and focus on regulation, token listing, and other
                        business activities.
                      </p>
                    </div>
                    <a class="button is-outlined right">Visit lightcone.io →</a>
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
