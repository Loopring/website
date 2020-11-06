import React from "react";

import englishTranslation from "./i18n/ConfigurationSection.en.json";
import chineseTranslation from "./i18n/ConfigurationSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./ConfigurationSection.scss";

class ConfigurationSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-protocol-configuration is-large has-background-grey">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <h1>{this.state.I.heading}</h1>
            </div>
          </div>

          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>{this.state.I.constants.heading}</h2>
                <div className="remark">{this.state.I.constants.remark}</div>
                <ul>
                  {this.state.I.constants.items.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow name">
                        {item.name}
                      </div>{" "}
                      <div className="tag">
                        {item.type}: {item.value}
                      </div>
                      <div
                        className="meaning"
                        dangerouslySetInnerHTML={{ __html: item.meaning }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>{this.state.I.globalParams.heading}</h2>
                <div className="remark">{this.state.I.globalParams.remark}</div>
                <ul>
                  {this.state.I.globalParams.items.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow name">
                        {item.name}
                      </div>{" "}
                      <div className="tag">
                        {item.type}: {item.value}
                      </div>
                      <div
                        className="meaning"
                        dangerouslySetInnerHTML={{ __html: item.meaning }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>{this.state.I.dexParams.heading}</h2>
                <div className="remark">{this.state.I.dexParams.remark}</div>
                <ul>
                  {this.state.I.dexParams.items.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow name">
                        {item.name}
                      </div>{" "}
                      <div className="tag">
                        {item.type}: {item.value}
                      </div>
                      <div
                        className="meaning"
                        dangerouslySetInnerHTML={{ __html: item.meaning }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="content">
                <h2>{this.state.I.offchainParams.heading}</h2>
                <div className="remark">
                  {this.state.I.offchainParams.remark}
                </div>

                <ul>
                  {this.state.I.offchainParams.items.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow name">
                        {item.name}
                      </div>{" "}
                      <div className="tag">
                        {item.type}: {item.value}
                      </div>
                      <div
                        className="meaning"
                        dangerouslySetInnerHTML={{ __html: item.meaning }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>{this.state.I.onchainParams.heading}</h2>
                <div className="remark">
                  {this.state.I.onchainParams.remark}
                </div>
                <ul>
                  {this.state.I.onchainParams.items.map((item, idx) => (
                    <li key={idx}>
                      <div className="has-leading-thin-arrow name">
                        {item.name}
                      </div>{" "}
                      <div className="tag">
                        {item.type}: {item.value}
                      </div>
                      <div
                        className="meaning"
                        dangerouslySetInnerHTML={{ __html: item.meaning }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ConfigurationSection;
