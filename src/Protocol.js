import React from 'react';

import './Protocol.scss';

import Header from './Header.js';
import SectionOverview from './Protocol/SectionOverview.js';
import SectionHackStory from './Protocol/SectionHackStory.js';
import SectionMedia from './Protocol/SectionMedia.js';
import SectionOpensource from './Protocol/SectionOpensource.js';

class Protocol extends React.Component {
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

export default Protocol;
