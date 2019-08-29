import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/CoreTeamSection.en.json';
import chineseTranslation from './i18n/CoreTeamSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './CoreTeamSection.scss';

class CoreTeamSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }
  render() {
    return (
      <section className="section section-coreteam is-large  has-background-grey">
        <div className="container">
          <div className="columns ">
            <div
              data-aos="fade-up"
              className="column is-5 has-text-centered has-text-right-tablet"
            >
              <h1>
                <Translate id="heading" />
              </h1>
            </div>
            <div data-aos="fade-up" className="column is-7">
              <ul>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:daniel@loopring.org"
                  >
                    <Translate id="danielWang.name" />
                  </a>{' '}
                  / <Translate id="danielWang.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:jay@loopring.org"
                  >
                    <Translate id="jayZhou.name" />
                  </a>{' '}
                  / <Translate id="jayZhou.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:johnston@loopring.org"
                  >
                    <Translate id="xiaoliang.name" />
                  </a>{' '}
                  / <Translate id="xiaoliang.title" />
                </li>

                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:steve@loopring.org"
                  >
                    <Translate id="steveGuo.name" />
                  </a>{' '}
                  / <Translate id="steveGuo.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:hoss@loopring.org"
                  >
                    <Translate id="hossMa.name" />
                  </a>{' '}
                  / <Translate id="hossMa.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:matthew@loopring.org"
                  >
                    <Translate id="matthew.name" />
                  </a>{' '}
                  / <Translate id="matthew.title" />
                </li>

                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:brecht@loopring.org"
                  >
                    <Translate id="brecht.name" />
                  </a>{' '}
                  / <Translate id="brecht.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:kongliang@loopring.org"
                  >
                    <Translate id="kongliang.name" />
                  </a>{' '}
                  / <Translate id="kongliang.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:hongyu@loopring.org"
                  >
                    <Translate id="hongyu.name" />
                  </a>{' '}
                  / <Translate id="hongyu.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yadong@loopring.org"
                  >
                    <Translate id="yadong.name" />
                  </a>{' '}
                  / <Translate id="yadong.title" />
                </li>

                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:eric@loopring.org"
                  >
                    <Translate id="yangli.name" />
                  </a>{' '}
                  / <Translate id="yangli.title" />
                </li>

                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yongfeng@loopring.org"
                  >
                    <Translate id="yongfeng.name" />
                  </a>{' '}
                  / <Translate id="yongfeng.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:chen@loopring.org"
                  >
                    <Translate id="wangchen.name" />
                  </a>{' '}
                  / <Translate id="wangchen.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:xiaolu@loopring.org"
                  >
                    <Translate id="xiaolu.name" />
                  </a>{' '}
                  / <Translate id="xiaolu.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yanyan@loopring.org"
                  >
                    <Translate id="laiyanyan.name" />
                  </a>{' '}
                  / <Translate id="laiyanyan.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yue@loopring.org"
                  >
                    <Translate id="wangyue.name" />
                  </a>{' '}
                  / <Translate id="wangyue.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:sheng@loopring.org"
                  >
                    <Translate id="chensheng.name" />
                  </a>{' '}
                  / <Translate id="chensheng.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:ruby@loopring.org"
                  >
                    <Translate id="ruby.name" />
                  </a>{' '}
                  / <Translate id="ruby.title" />
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:leila@loopring.org"
                  >
                    <Translate id="leila.name" />
                  </a>{' '}
                  / <Translate id="leila.title" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(CoreTeamSection);
