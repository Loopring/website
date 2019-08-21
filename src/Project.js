import React from 'react';

import './Project.scss';

import Header from './Header.js';
import SectionOverview from './Project/SectionOverview.js';
import SectionHackStory from './Project/SectionHackStory.js';
import SectionMedia from './Project/SectionMedia.js';
import SectionOpensource from './Project/SectionOpensource.js';

class Project extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionOverview />
        <SectionOpensource />
        <SectionHackStory />
      </div>
    );
  }
}

export default Project;
