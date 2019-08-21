import React from 'react';

import './Project.scss';

import Header from './Header.js';
import SectionOverview from './Sections/SectionOverview.js';
import SectionHackStory from './Sections/SectionHackStory.js';
import SectionMedia from './Sections/SectionMedia.js';
import SectionLoopringHistory from './Sections/SectionLoopringHistory.js';

class Project extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionOverview />
        <SectionLoopringHistory />
        <SectionHackStory />
      </div>
    );
  }
}

export default Project;
