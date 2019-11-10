import React from "react";

import englishTranslation from "../Ceremony/i18n/Ceremony.en.json";
import chineseTranslation from "../Ceremony/i18n/Ceremony.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./CeremonySection.scss";

class CeremonySection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return this.state.I.participants.done.length === 0 ? (
      <span />
    ) : (
      <section className="section section-ceremony is-large  has-background-primary-dark">
        <div className="container">
          <div className="columns ">
            <div
              data-aos="fade-up"
              className="column is-5 has-text-centered has-text-right-tablet"
            >
              <h1>{this.state.I.teamPage.heading1}</h1>
              <h1>{this.state.I.teamPage.heading2}</h1>
              <h1>{this.state.I.teamPage.heading3}</h1>
            </div>
            <div data-aos="fade-up" className="column is-7">
              <ul>
                {this.state.I.participants.done.map((participant, idx) => (
                  <li key={idx}>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href={participant.url}
                    >
                      <span className="name">{participant.name}</span>
                    </a>{" "}
                    / {participant.org}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CeremonySection;
