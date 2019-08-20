import React from 'react';
import './SectionHackStory.scss';

class SectionHackStory extends React.Component {
  render() {
    return (
      <section className="section is-large has-background-dark has-text-white">
        <div className="container">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <span className="icon">
                <i className="fas fa-3x fa-user-secret"></i>
              </span>

              <h1 className="has-text-white">Previous Exchange Hacks</h1>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
            <div className="column is-3">
              $101010120 / Jan 01/2012, <a href="">dafadfd fd asfdas f</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHackStory;
