import React from 'react';

import './About.scss';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import HeroSection from './HeroSection.js';
import VisionSection from './VisionSection.js';
import HacksSection from './HacksSection.js';
import MediaSection from './MediaSection.js';
import VersionsSection from './VersionsSection.js';

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        <Header />
        <HeroSection />
        <VisionSection />
        <VersionsSection />
        <HacksSection />
        <Footer />
      </div>
    );
  }
}

export default About;
