import React from 'react';

import './About.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';

import HeroSection from './About/HeroSection.js';
import VisionSection from './About/VisionSection.js';
import HacksSection from './About/HacksSection.js';
import MediaSection from './About/MediaSection.js';
import VersionsSection from './About/VersionsSection.js';

class About extends React.Component {
  render() {
    return (
      <div>
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
