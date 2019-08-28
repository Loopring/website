import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';

class I18nComponent extends React.Component {
  constructor(props, englishTranslation, chineseTranslation) {
    super(props);
    this.props.initialize({
      languages: [
        {name: '中文', code: 'cn'},
        {name: 'English', code: 'en'},
      ],
      options: {renderToStaticMarkup},
    });

    this.props.addTranslationForLanguage(englishTranslation, 'en');
    this.props.addTranslationForLanguage(chineseTranslation, 'cn');
  }
}

export default I18nComponent;
