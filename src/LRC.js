import React from 'react';

import './LRC.scss';

import Header from './Header.js';
import SectionLRCHero from './Sections/SectionLRCHero.js';
import SectionLRCStaking from './Sections/SectionLRCStaking.js';
import SectionLRCInfo from './Sections/SectionLRCInfo.js';
import Footer from './Sections/Footer.js';
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
        <SectionLRCHero />

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

        <SectionLRCStaking />
        <SectionLRCInfo />
        <Footer />
      </div>
    );
  }
}

export default LRC;
