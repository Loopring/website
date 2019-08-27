import React from 'react';

import './Updates.scss';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import SectionUpdatesHero from './HeroSection.js';
import ArticlesSection from './ArticlesSection.js';

class Updates extends React.Component {
  render() {
    return (
      <div className="page-updates">
        <Header />
        <SectionUpdatesHero />
        <ArticlesSection />
        <Footer />
      </div>
    );
  }
}

export default Updates;
