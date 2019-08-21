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
          this.setState({title: data.title, stories: data.stories})
        );
  }

  render() {
    return (
      <section
        ref={this.hackStories}
        className="section section-hack-stories is-large has-text-black has-background-white"
      >
        <div className="container">
          <div className="columns">
            <div className="column is-3 has-text-left">
              <FontAwesomeIcon icon={faRadiationAlt} size="5x" />

              <div className="total-figure">{this.state.title}</div>
              <div className="total-figure-label">
                crypto-assets that belongs to the users have been reportedly
                hacked from centralized exchanges, and counting...
              </div>
            </div>
            <div className="column stories has-text-centered">
              {this.state.stories.map((story) => (
                <div className="columns is-mobile">
                  <div className="column is-3 has-text-right">
                    <span>{story.date} ⟶ </span>
                  </div>
                  <div className="column is-5 has-text-left">
                    <h2>{story.title}</h2>
                    <p>{story.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHackStory;
