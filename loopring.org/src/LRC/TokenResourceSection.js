import React from "react";

import englishTranslation from "./i18n/TokenResourceSection.en.json";
import chineseTranslation from "./i18n/TokenResourceSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./TokenResourceSection.scss";

class TokenResourceSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section lrc-resource-download is-large has-background-primary-dark">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              {/* Unlike many other projects, Loopring's utility token LRC is no longer a fee token.*/}
            </div>
          </div>

          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column  is-4 has-text-right is-right has-text-centered-mobile"
            >
              <a
                className="download-button"
                href="/resources/loopring_logo_icons.zip"
              >
                <img draggable="false" src={"/images/icondownload.svg"} />
              </a>
            </div>

            <div
              data-aos="fade-up"
              className="column is-6  has-text-left has-text-centered-mobile"
            >
              <h1>{this.state.I.heading}</h1>
              <p className="has-text-left has-text-centered-mobile">
                {this.state.I.info1}
              </p>
              <p className="has-text-left has-text-centered-mobile">
                {this.state.I.info2}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TokenResourceSection;
