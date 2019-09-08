import React from "react";
import "./OverviewSection.scss";
import "../../node_modules/aos/dist/aos.css";
import AOS from "aos";

import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/OverviewSection.en.json";
import chineseTranslation from "./i18n/OverviewSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

class OverviewSection extends JsonI18nComponent {
  constructor(props, context) {
    super(props, englishTranslation, chineseTranslation);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <section className="section is-large section-about-overview has-background-grey">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <h1 className="">{this.state.I.overview}</h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>{this.state.I.section1.title}</h2>

                {this.state.I.section1.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            <div data-aos="fade-up" className="column is-hidden-mobile is-8">
              <figure className="image covered is-4by3">
                <img src="/images/inserts/trading-image.jpg" />
              </figure>
            </div>
            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.state.I.section1.objective
                  }}
                />
              </div>

              <figure className="image covered is-1by1">
                <img
                  className="is-rounded"
                  src="/images/inserts/trading-image2.jpg"
                />
              </figure>
            </div>

            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>{this.state.I.section2.title}</h2>

                {this.state.I.section2.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}

                <h2>{this.state.I.section3.title}</h2>

                {this.state.I.section3.content.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>{this.state.I.section4.title}</h2>

                {this.state.I.section4.content.map((p, idx) => (
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

export default OverviewSection;
