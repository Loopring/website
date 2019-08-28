import React from 'react';

import './About.scss';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import HeroSection from './HeroSection.js';
import OverviewSection from './OverviewSection.js';
import VersionsSection from './VersionsSection.js';
import FeaturesSection from './FeaturesSection.js';
// import MediaSection from './MediaSection.js';
import HacksSection from './HacksSection.js';

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        <Header />
        <HeroSection />
        <OverviewSection />
        <VersionsSection />
        <FeaturesSection />
        {/* <MediaSection />*/}
        <HacksSection />
        <Footer />
      </div>
    );
  }
}

export default About;
