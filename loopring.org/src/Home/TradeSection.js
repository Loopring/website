import React from "react";

import englishTranslation from "./i18n/TradeSection.en.json";
import chineseTranslation from "./i18n/TradeSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./TradeSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class TradeSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-trade is-large has-background-white">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-centered is-vcentered has-text-centered"
              >
                <h1 className="trade-title">{this.state.I.heading}</h1>
                <div class="subtitle">
                  <p>{this.state.I.subtitle1}</p>
                  <br />
                  <p>{this.state.I.subtitle2}</p>
                </div>
                <img
                  data-aos="zoom-in-up"
                  className="dexImg"
                  src={"/images/inserts/" + this.state.I.img}
                />
              </div>
            </div>

            <div className="columns is-centered is-vcentered">
              <div className="column is-centered is-vcentered has-text-centered is-12">
                <a
                  href="https://exchange.loopring.pro"
                  target="_blank"
                  className="trade-now"
                >
                  {this.state.I.tradeNow}
                </a>

                <a
                  href="https://docs.loopring.io"
                  target="_blank"
                  className="trade-with-api has-text-primary"
                >
                  {this.state.I.tradeWithAPI}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TradeSection;
