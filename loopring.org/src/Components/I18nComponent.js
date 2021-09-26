import React from "react";
import detectBrowserLanguage from "detect-browser-language";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

class I18nComponent extends React.Component {
  constructor(props, englishTranslation, chineseTranslation) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "中文", code: "zh" }
      ],
      options: { renderToStaticMarkup }
    });

    this.props.addTranslationForLanguage(englishTranslation, "en");
    this.props.addTranslationForLanguage(chineseTranslation, "zh");

    const lang = detectBrowserLanguage().toLowerCase();
    if (lang === "zh" || lang === "zh-cn") {
      this.props.setActiveLanguage("zh");
      this.state = { lang: "zh" };
    } else {
      this.props.setActiveLanguage("en");
      this.state = { lang: "en" };
    }

    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  isChinese() {
    return this.state.lang === "zh";
  }
}

export default I18nComponent;
