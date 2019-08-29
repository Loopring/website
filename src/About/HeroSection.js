import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './HeroSection.en.json';
import chineseTranslation from './HeroSection.cn.json';
import I18nComponent from '../Components/I18nComponent';

import './HeroSection.scss';

class HeroSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-about-hero is-large">
        <div className="backdrop"></div>

        <div className="text">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <text
                  className="has-text-din"
                  id="title"
                  x="50%"
                  y="35%"
                  dy="1.58em"
                >
                  <Translate id="loopring" />
                </text>
                <text id="subtitle" x="50%" y="40%" dy="9.8em">
                  <Translate id="slogan" />
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
