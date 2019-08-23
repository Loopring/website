import React from 'react';
import './SectionHackStory.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionHackStory extends React.Component {
  constructor(props) {
    super(props);
    this.hackStories = React.createRef();
    this.state = {
      title: '...',
      stories: [],
    };
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) =>
          this.setState({total: data.total, stories: data.stories})
        );
  }

  render() {
    return (
      <section
        ref={this.hackStories}
        className="section section-hack-stories is-large has-text-black has-background-grey"
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-12 has-text-centered">
              <h1>Crypto Exchange Hacks</h1>
            </div>
          </div>

          <div className="columns">
            <div className="column is-3 has-text-left">
              <FontAwesomeIcon icon={faRadiationAlt} size="5x" />

              <div className="total-figure">
                {this.state.total}{' '}
                <span className="total-figure-label">
                  - the crypto-assets hacked from centralized exchanges that
                  belongs to the users, and counting...
                </span>
              </div>
            </div>
            <div className="column stories">
              {this.state.stories.map((story) => (
                <div className="columns is-mobile">
                  <div className="column is-3 has-text-right">
                    <span>{story.date} ⟶ </span>
                  </div>
                  <div className="column is-5 has-text-left">
                    <a target="_blank" href={story.source}>
                      <h2>{story.title}</h2>
                    </a>
                    <p>{story.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column has-text-centered  is-12 call-for-action">
              <a className="is-rounded" href="/protocol">
                Learn how Loopring achieves high level of security ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHackStory;
