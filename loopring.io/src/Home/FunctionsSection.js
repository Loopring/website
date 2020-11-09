import React from "react";

import englishTranslation from "./i18n/FunctionsSection.en.json";
import chineseTranslation from "./i18n/FunctionsSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./FunctionsSection.scss";

class FunctionsSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-functions is-large has-background-white">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>守护人</h1>
                  <h2>恢复 I 锁定/解锁 I 审批超额转账</h2>
                  <p>
                    守护人必须是您绝对信任的人。只要超过一半的守护人同意就能决定钱包资产的最终拥有权。
                  </p>
                  <p>我们也支持非路印钱包做守护人。</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FunctionsSection;
