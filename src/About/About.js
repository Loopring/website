import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';
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
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        {name: '中文', code: 'cn'},
        {name: 'English', code: 'en'},
      ],
      options: {renderToStaticMarkup},
    });
  }

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

export default withLocalize(About);
