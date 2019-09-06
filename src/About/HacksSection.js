import React from "react";

import englishTranslation from "./i18n/HacksSection.en.json";
import chineseTranslation from "./i18n/HacksSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiationAlt } from "@fortawesome/free-solid-svg-icons";

import "./HacksSection.scss";

class HacksSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-about-hacks is-large has-background-grey">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <h1>{this.state.I.heading}</h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns">
            <div
              data-aos="fade-up"
              className="column is-3 is-12-mobile has-text-left has-text-centered-mobile"
            >
              <FontAwesomeIcon icon={faRadiationAlt} size="5x" />

              <div className="total-figure">{this.state.I.total}</div>
            </div>
            <div
              data-aos="fade-up"
              className="column is-9 is-12-mobile stories"
            >
              {this.state.I.stories.map((story, idx) => (
                <div className="columns" key={idx}>
                  <div
                    data-aos="fade-up"
                    className="column is-3 is-12-mobile has-text-right has-text-left-mobile"
                  >
                    <span>{story.date} ⟶ </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="column is-6 is-12-mobile has-text-justified "
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={story.source}
                    >
                      <h2>{story.title}</h2>
                    </a>
                    <p>{story.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column has-text-centered  is-12 call-for-action"
            >
              <a className="is-rounded is-unselectable " href="/#/protocol">
                {this.state.I.learn}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HacksSection;
