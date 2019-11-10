import React from "react";

import englishTranslation from "./i18n/CeremonySection.en.json";
import chineseTranslation from "./i18n/CeremonySection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./CeremonySection.scss";

class CeremonySection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
    this.state.participants = [];
  }

  componentDidMount() {
    const urlBase =
      "https://raw.githubusercontent.com/Loopring/website/master/src/Ceremony/i18n/";
    const url = this.isChinese()
      ? urlBase + "ceremony.zh.json"
      : urlBase + "ceremony.en.json";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ participants: data.done }));
  }

  render() {
    return this.state.participants.length === 0 ? (
      <span />
    ) : (
      <section className="section section-ceremony is-large  has-background-white">
        <div className="container">
          <div className="columns ">
            <div
              data-aos="fade-up"
              className="column is-5 has-text-centered has-text-right-tablet"
            >
              <h1>{this.state.I.heading1}</h1>
              <h1>{this.state.I.heading2}</h1>
              <h1>{this.state.I.heading3}</h1>
            </div>
            <div data-aos="fade-up" className="column is-7">
              <ul>
                {this.state.participants.map((participant, idx) => (
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
