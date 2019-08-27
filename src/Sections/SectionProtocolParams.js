import React from 'react';
import './SectionProtocolParams.scss';

const API = './hacks_en.json';

class SectionProtocolParams extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section protocol-section-3 is-large has-background-black">
        <div className="container">
          <div className="columns">
            <div className="column is-5 has-text-left">
              <h1>Configurations</h1>
            </div>
            <div className="column is-5 has-text-left"></div>
          </div>

          <div className="columns">
            <div className="column is-5 has-text-left">
              <h2>Global Constants</h2>
            </div>

            <div className="column is-5 has-text-left">
              <h2>DEX Parameters</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProtocolParams;
