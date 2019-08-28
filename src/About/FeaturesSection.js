import React from 'react';
import './FeaturesSection.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class FeaturesSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-about-features is-large has-background-white">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>Features</h1>
            </div>
          </div>
          {/* ---*/}
          <div className="columns is-multiline">
            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 1.0 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag highlight">Ring-Matching</span>
              <span className="tag highlight">Order-Sharing</span>
              <span className="tag highlight">Non-Custodial</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 1.5 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">Ring-Matching</span>
              <span className="tag ">Order-Sharing</span>
              <span className="tag">Non-Custodial</span>
              <span className="tag highlight">Dual-Authoring</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow deprecated">
                Loopring 2.0 (deprecated)
              </span>{' '}
              ······
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag">Ring-Matching</span>
              <span className="tag">Order-Sharing</span>
              <span className="tag">Non-Custodial</span>
              <span className="tag">Dual-Authoring</span>
              <span className="tag highlight">Any-Token-As-Fee</span>
              <span className="tag highlight">LRC-Burning</span>
            </div>

            <div data-aos="fade-up" className="column is-2 is-offset-2">
              <span className="has-leading-thick-arrow">Loopring 3.0</span>{' '}
              ···························
            </div>
            <div data-aos="fade-up" className="column column-features is-6">
              <span className="tag deprecated">Ring-Matching</span>
              <span className="tag deprecated">Order-Sharing</span>
              <span className="tag deprecated">Non-Custodial</span>
              <span className="tag deprecated">Dual-Authoring</span>
              <span className="tag deprecated">Any-Token-as-Fee</span>
              <span className="tag">LRC-Burning</span>
              <span className="tag highlight">Custodial-in-Contract</span>
              <span className="tag highlight">Trade-Token-as-Fee</span>
              <span className="tag highlight">zkRollup</span>
              <span className="tag highlight">LRC-Staking</span>
              <span className="tag highlight">High-Throughtput</span>
              <span className="tag highlight">Low-Cost</span>
              <span className="tag highlight">Upgradability</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesSection;
