import React from "react";
import Odometer from "react-odometerjs";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/PerformanceSection.en.json";
import chineseTranslation from "./i18n/PerformanceSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./PerformanceSection.scss";

class PerformanceSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
    this.state = {
      throughput: 1000,
      cost: this.isChinese() ? 0.001 : 0.0002
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ throughput: 2025 }), 50);
    // setTimeout(data => this.setState({ cost: 0.005 }), 1000);
  }

  render() {
    return (
      <div>
        <section className="section section-protocol-throughput is-large has-background-grey">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 is-centered has-text-centered"
              >
                <h1>
                  <Translate id="headingThroughput" />
                </h1>
                <Odometer value={this.state.throughput} format="(,ddd)" />
              </div>
            </div>

            {/* ---*/}

            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-justify"
              >
                <div className="content">
                  <p>
                    <Translate
                      id="throughputDetail"
                      options={{ renderInnerHtml: true }}
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* ---*/}
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <ul className="links">
                  <li>
                    <a
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/contracts"
                      className="underline has-leading-thick-arrow"
                    >
                      <Translate id="links.contracts" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/circuit"
                      className="underline has-leading-thick-arrow"
                    >
                      <Translate id="links.circuits" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://loopring.org/#/post/loopring-3-6-is-code-complete-and-security-audit-has-begun-en"
                      className=" highlight_link bluebg "
                    >
                      <Translate id="links.loopring35" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ====*/}

        <section className="section section-protocol-cost is-large has-background-primary-dark">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 is-centered has-text-centered"
              >
                <h1>
                  <Translate id="headingCost" />
                </h1>
                <Odometer
                  theme="white smaller"
                  format="(ddd).dddd"
                  value={this.state.cost}
                />
              </div>
            </div>
            {/* ---*/}
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-justify"
              >
                <div className="content">
                  <p>
                    <Translate
                      id="costDetail"
                      options={{ renderInnerHtml: true }}
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* ---*/}

            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <ul className="links">
                  <li>
                    <a
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/contracts"
                      className="underline has-leading-thick-arrow"
                    >
                      <Translate id="links.contracts" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/circuit"
                      className="underline has-leading-thick-arrow"
                    >
                      <Translate id="links.circuits" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://loopring.org/#/post/loopring-3-6-is-code-complete-and-security-audit-has-begun-en"
                      className=" highlight_link whitebg "
                    >
                      <Translate id="links.loopring35" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withLocalize(PerformanceSection);
