import React from 'react';

import './Blog.scss';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import SectionBlogHero from './Sections/SectionBlogHero.js';
import SectionArticles from './Sections/SectionArticles.js';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionBlogHero />
        <SectionArticles />
        <Footer />
      </div>
    );
  }
}

export default Blog;
