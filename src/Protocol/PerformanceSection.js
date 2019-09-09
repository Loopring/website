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
      throughput: 100,
      cost: this.isChinese() ? 0.015 : 0.0021
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ throughput: 350 }), 50);
    // setTimeout(data => this.setState({ cost: 0.002 }), 1000);
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
                <table className="table">
                  <thead>
                    <tr>
                      <th className="first"></th>
                      <th>
                        <div>
                          <Translate id="table.throughput" />
                        </div>
                        <div>
                          <Translate id="table.withOCDA" />
                        </div>
                      </th>
                      <th>
                        <div>
                          <Translate id="table.throughput" />
                        </div>
                        <div>
                          <Translate id="table.withoutOCDA" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">
                        <Translate id="table.current" />
                      </td>
                      <td>
                        <span className="highlighted">350</span>
                      </td>
                      <td>
                        <span className="highlighted">6,900</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="">
                        <Translate id="table.post" />
                      </td>
                      <td>
                        <span className="highlighted">1,400</span>
                      </td>
                      <td>
                        <span className="highlighted">10,500</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
