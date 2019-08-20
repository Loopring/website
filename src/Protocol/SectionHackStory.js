import React from 'react';
import './SectionHackStory.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';

const API = 'https://hn.algolia.com/api/v1/s';

class SectionHackStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [{title: 'afdf', detail: 'fdafaf', date: 'aaaa'}],
    };
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) => this.setState({stories: data.stories}));
  }

  render() {
    return (
      <section className="section section-hack-stories is-large has-text-white">
        <div className="container">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <FontAwesomeIcon icon={faUserSecret} size="3x" />

              <h2 className="title">
                $10000000000 hack reportedly, and counting...
              </h2>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.state.stories.map((story) => (
              <div className="column is-2">
                <div className="content">
                  <h2>{story.title}</h2>
                  <i>{story.date}</i>
                  <p>{story.detail}}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHackStory;
