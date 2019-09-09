import React from "react";

import englishTranslation from "./i18n/VersionsSection.en.json";
import chineseTranslation from "./i18n/VersionsSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./VersionsSection.scss";

class VersionsSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-about-versions is-large has-background-primary-dark">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10">
              <h1>{this.state.I.heading}</h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <div className="content">
                <p>{this.state.I.starter}</p>

                <h2>{this.state.I.version10.title}</h2>

                {this.state.I.version10.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <figure className="image covered is-3by2">
                <img src="/images/inserts/ring.jpg" />
              </figure>
            </div>
            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <div className="content">
                <h2>{this.state.I.version15.title}</h2>

                {this.state.I.version15.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <div className="content">
                <h2>{this.state.I.version20.title}</h2>

                {this.state.I.version20.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="column version30 is-6 has-text-justify has-text-black has-background-white"
            >
              <div className="content">
                <h2>{this.state.I.version30.title}</h2>

                {this.state.I.version30.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VersionsSection;
