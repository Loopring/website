import React from 'react';

import './About.scss';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import HeroSection from './About/HeroSection.js';
import VisionSection from './About/VisionSection.js';
import HacksSection from './About/HacksSection.js';
import MediaSection from './About/MediaSection.js';
import VersionsSection from './About/VersionsSection.js';

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
