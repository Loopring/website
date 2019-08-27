import React from 'react';

import './About.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';

import HeroSection from './About/HeroSection.js';
import SectionOverview from './About/SectionOverview.js';
import SectionHackStory from './About/SectionHackStory.js';
import SectionMedia from './About/SectionMedia.js';
import SectionLoopringHistory from './About/SectionLoopringHistory.js';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeroSection />
        <SectionOverview />
        <SectionLoopringHistory />
        <SectionHackStory />

        <Footer />
      </div>
    );
  }
}

export default About;
