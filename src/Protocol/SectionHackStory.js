import React from 'react';
import './SectionHackStory.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionHackStory extends React.Component {
  constructor(props) {
    super(props);

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
      <section className="section section-hack-stories is-large has-text-white">
        <div className="container">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <FontAwesomeIcon icon={faUserSecret} size="3x" />

              <h2 className="title">{this.state.title}</h2>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.state.stories.map((story) => (
              <div className="column is-one-fifth">
                <div className="content">
                  <h2>{story.title}</h2>
                  <i>{story.date}</i>
                  <p>{story.detail}</p>
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
