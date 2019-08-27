import React from 'react';

import './LRC.scss';

import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import HeroSection from './LRC/HeroSection.js';
import IconSection from './LRC/IconSection.js';
import StakingSection from './LRC/StakingSection.js';
import TokenInfoSection from './LRC/TokenInfoSection.js';

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
      <div className="page-lrc">
        <Header />
        <HeroSection />
        <IconSection />

        <StakingSection />
        <TokenInfoSection />
        <Footer />
      </div>
    );
  }
}

export default LRC;
