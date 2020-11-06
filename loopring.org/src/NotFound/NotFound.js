import React from "react";

import Header from "../Components/Header.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/NotFound.en.json";
import chineseTranslation from "./i18n/NotFound.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./NotFound.scss";

class NotFound extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div className="page-notfound">
        <Header />
        <section className="section has-text-centered is-vcentered is-centered is-large">
          <FontAwesomeIcon icon={faSadTear} size="5x" />

          <h1>
            <Translate id="notFound" />
          </h1>
          <div>
            <Translate id="contact" options={{ renderInnerHtml: true }} />
          </div>
        </section>
      </div>
    );
  }
}

export default withLocalize(NotFound);
