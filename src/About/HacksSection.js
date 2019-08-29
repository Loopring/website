import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/HacksSection.en.json';
import chineseTranslation from './i18n/HacksSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

import './HacksSection.scss';

const API = './json_en/hacks.json';

class HacksSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
    this.hackStories = React.createRef();
    this.state = {
      title: '...',
      stories: [],
    };
  }

  componentDidMount() {
    this.timer = setTimeout(
        () =>
          fetch(API)
              .then((response) => response.json())
              .then((data) => {
                this.setState({total: data.total, stories: data.stories});
              }),
        1000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <section
        ref={this.hackStories}
        className="section section-about-hacks is-large has-background-grey"
      >
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <h1>Crypto Hacks</h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns">
            <div
              data-aos="fade-up"
              className="column is-3 is-12-mobile has-text-left has-text-centered-mobile"
            >
              <FontAwesomeIcon icon={faRadiationAlt} size="5x" />

              <div className="total-figure">
                {this.state.total}{' '}
                <span className="total-figure-label">
                  — the crypto-assets hacked from centralized exchanges that
                  belongs to the users, and counting...
                </span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="column is-9 is-12-mobile stories"
            >
              {this.state.stories.map((story, idx) => (
                <div className="columns" key={idx}>
                  <div
                    data-aos="fade-up"
                    className="column is-3 is-12-mobile has-text-right has-text-left-mobile"
                  >
                    <span>{story.date} ⟶ </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="column is-6 is-12-mobile has-text-justified "
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={story.source}
                    >
                      <h2>{story.title}</h2>
                    </a>
                    <p>{story.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="columns is-centered">
            <div
              data-aos="fade-up"
              className="column has-text-centered  is-12 call-for-action"
            >
              <a
                className="is-rounded is-unselectable has-trailing-arrow"
                href="/protocol"
              >
                Learn how Loopring 3.0 achieves high level of security
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HacksSection);
