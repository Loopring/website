import React from "react";

import englishTranslation from "./i18n/CoreTeamSection.en.json";
import chineseTranslation from "./i18n/CoreTeamSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./CoreTeamSection.scss";

class CoreTeamSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-coreteam is-large  has-background-primary-dark">
        <div className="container">
          <div className="columns ">
            <div
              data-aos="fade-up"
              className="column is-5 has-text-centered has-text-right-tablet"
            >
              <h1>{this.state.I.heading}</h1>
            </div>
            <div data-aos="fade-up" className="column is-7">
              <ul>
                {this.state.I.members.map((member, idx) => (
                  <li key="idx">
                    <a
                      className="highlight has-leading-thin-arrow"
                      href={member.url}
                    >
                      <span className="name">{member.name}</span>
                    </a>{" "}
                    / {member.title}
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

export default CoreTeamSection;
