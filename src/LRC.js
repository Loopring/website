import React from 'react';

import './LRC.scss';

import Header from './Components/Header.js';
import HeroSection from './LRC/HeroSection.js';
import StakingSection from './LRC/StakingSection.js';
import TokenInfoSection from './LRC/TokenInfoSection.js';
import Footer from './Components/Footer.js';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class LRC extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Header />
        <HeroSection />

        <section className="section section-lrc-icon   has-text-black has-background-white">
          <div className="container is-centered has-text-centered">
            <div className="columns is-unselectable is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 has-text-centered"
              >
                <figure className="image lrc-logo">
                  <img
                    draggable="false"
                    className="is-rounded"
                    src="images/lrc.svg"
                  />
                </figure>{' '}
              </div>
            </div>
          </div>
        </section>

        <StakingSection />
        <TokenInfoSection />
        <Footer />
      </div>
    );
  }
}

export default LRC;
