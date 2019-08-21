import React from 'react';

import './Blog.scss';

import Header from './Header.js';
import SectionBlogHero from './Sections/SectionBlogHero.js';
import SectionArticles from './Sections/SectionArticles.js';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionBlogHero />
        <SectionArticles />
      </div>
    );
  }
}

export default Blog;
