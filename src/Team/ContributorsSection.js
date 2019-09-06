import React from "react";

import englishTranslation from "./i18n/ContributorsSection.en.json";
import chineseTranslation from "./i18n/ContributorsSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./ContributorsSection.scss";

class ContributorsSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-contributors is-large  has-background-blue">
          <div className="container">
            <div className="columns">
              <div
                data-aos="fade-up"
                className="column is-6 has-text-centered has-text-right-tablet"
              >
                <h1>{this.state.I.headingAdvisors}</h1>
              </div>
              <div data-aos="fade-up" className="column is-6">
                <ul>
                  {this.state.I.advisors.map((item, idx) => (
                    <li key="idx">
                      <a
                        disabled={!item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight has-leading-thin-arrow"
                      >
                        <span className="name">{item.name}</span>
                      </a>{" "}
                      / {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="columns">
              <div
                data-aos="fade-up"
                className="column is-3 has-text-centered has-text-right-tablet"
              >
                <h1>{this.state.I.headingContributors}</h1>
              </div>
              <div data-aos="fade-up" className="column is-9">
                <ul>
                  {this.state.I.contributors.map((item, idx) => (
                    <li key="idx">
                      <a
                        disabled={!item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight has-leading-thin-arrow"
                      >
                        <span className="name">{item.name}</span>
                      </a>{" "}
                      / {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContributorsSection;
