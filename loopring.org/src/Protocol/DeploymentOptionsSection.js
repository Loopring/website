import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/DeploymentOptionsSection.en.json";
import chineseTranslation from "./i18n/DeploymentOptionsSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./DeploymentOptionsSection.scss";

class DeploymentOptionsSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section is-large section-protocol-deployment  has-background-white">
        {/* ---*/}
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column has-text-centered  is-6">
              <h1>{this.state.I.headingDeployment}</h1>
              <p className="has-text-left">
                {this.state.I.headingDeploymentMore}
              </p>
            </div>
          </div>

          {/* ---*/}
          <div className="columns columns-options is-centered">
            {this.state.I.options.map((option, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="column is-3 has-text-centered "
              >
                <div className="content  has-background-blue has-text-left">
                  <h2>{option.title}</h2>

                  {option.contents.map((p, idx) => (
                    <p key={"p_" + idx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default DeploymentOptionsSection;
