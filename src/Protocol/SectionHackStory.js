import React from 'react';
import './SectionHackStory.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';

class SectionHackStory extends React.Component {
  render() {
    return (
      <section className="section section-hack-stories is-large has-background-black has-text-white">
        <div className="container">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <FontAwesomeIcon icon={faUserSecret} size="3x" />

              <h2 className="has-text-white">
                $10000000000 hacked and Counting...
              </h2>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-3">afd</div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHackStory;
