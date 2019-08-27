import React from 'react';

import './Updates.scss';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import SectionUpdatesHero from './Updates/HeroSection.js';
import ArticlesSection from './Updates/ArticlesSection.js';

class Updates extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionUpdatesHero />
        <ArticlesSection />
        <Footer />
      </div>
    );
  }
}

export default Updates;
