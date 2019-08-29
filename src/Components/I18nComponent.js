import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';

class I18nComponent extends React.Component {
  constructor(props, englishTranslation, chineseTranslation) {
    super(props);
    this.props.initialize({
      languages: [
        {name: 'English', code: 'en'},
        {name: '中文', code: 'zh'},
      ],
      options: {renderToStaticMarkup},
    });

    this.props.addTranslationForLanguage(englishTranslation, 'en');
    this.props.addTranslationForLanguage(chineseTranslation, 'zh');

    if (navigator.language === 'zh' || navigator.browserLanguage === 'zh') {
      this.props.setActiveLanguage('zh');
    } else {
      this.props.setActiveLanguage('en');
    }
  }
}

export default I18nComponent;
