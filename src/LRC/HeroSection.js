import React from 'react';

import './HeroSection.scss';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class HeroSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section is-large has-background-white section-lrc-hero">
        <div className="columns is-multiline">
          <div className="column is-12 is-unselectable hero has-text-din">
            <div className="container">
              <div data-aos="fade-up" className="text">
                Buy and stake <span className="symbol">LRC</span>
              </div>
              <div data-aos="fade-up" className="text smaller">
                to capture the growing value of Loopring's ecosystem.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
