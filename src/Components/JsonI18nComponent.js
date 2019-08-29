import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

class JsonI18nComponent extends React.Component {
  constructor(props, englishTranslation, chineseTranslation) {
    super(props);

    if (navigator.language === 'zh' || navigator.browserLanguage === 'zh') {
      this.state = {lang: 'zh', I: chineseTranslation};
    } else {
      this.state = {lang: 'en', I: englishTranslation};
    }

    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  isChinese() {
    return this.state.lang === 'zh';
  }
}

export default JsonI18nComponent;
