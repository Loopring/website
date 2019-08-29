import React from "react";
import "./OverviewSection.scss";
import "../../node_modules/aos/dist/aos.css";
import AOS from "aos";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/OverviewSection.en.json";
import chineseTranslation from "./i18n/OverviewSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

class OverviewSection extends I18nComponent {
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
              <h1 className="">
                <Translate id="overview" />
              </h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>
                  <Translate id="section1.title" />
                </h2>
                <p>
                  <Translate id="section1.p1" />
                </p>
                <p>
                  <Translate id="section1.p2" />
                </p>
                <p>
                  <Translate id="section1.p3" />
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="column is-8">
              <figure className="image covered is-8by6">
                <img src="/images/inserts/trading-image.jpg" />
              </figure>
            </div>
            <div data-aos="fade-up" className="column is-4">
              <figure className="image covered is-1by1">
                <img
                  className="is-rounded"
                  src="/images/inserts/trading-image2.jpg"
                />
              </figure>
            </div>
            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>
                  <Translate id="subtitle2" />
                </h2>
                <p>
                  The security of user assets is and will remain to be
                  Loopring's first priority. Here at Loopring, we believe it's
                  absurd to talk about other aspects of a protocol without
                  evaluating its security guarantees first.
                </p>
                <p>
                  The previous three versions of the Loopring protocol do not
                  take any custody of user assets at all — traders are always in
                  possession of their asset. The latest version, Loopring 3.0,
                  relies on smart contract to hold assets to be traded. We
                  designed the protocol in such a way that users can always
                  claim their assets in all circumstances, even when DEX
                  operators are anonymously evil.
                </p>
                <p>
                  We claim that Loopring offers users the same level of security
                  as the underlying Ethereum blockchain — if a feature called
                  On-Chain Data Availability, aka OCDA, is turned on. Trading on
                  Loopring-based DEXes demands traders no trust in the DEX
                  owners or operators, nor the Loopring team. In terms of
                  crypto-trading, being trustless will become the new standard
                  of trustworthiness.
                </p>
                <h2>
                  <Translate id="subtitle3" />
                </h2>
                <p>
                  If you have ever run centralized exchanges, you know the
                  stress and fear of being hacked. Loopring ensures that even
                  all your servers were compromised, you will only lose a couple
                  of Ether that you use as transaction fees (gas). You can
                  always recover from such incidences and resume your business.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="column is-4 has-text-justify">
              <div className="content">
                <h2>
                  <Translate id="section4.title" />
                </h2>
                <p>
                  <Translate id="section4.p1" />
                </p>
                <p>
                  <Translate
                    id="section4.p2"
                    options={{ renderInnerHtml: true }}
                  />
                </p>
                <p>
                  <Translate id="section4.p3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(OverviewSection);
