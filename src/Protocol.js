import React from 'react';
import logo from './logo.svg';
import './Protocol.scss';

import Header from './Header.js';
import SectionOverview from './Protocol/SectionOverview.js';
import SectionHackStory from './Protocol/SectionHackStory.js';

class Protocol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionOverview />
        <SectionHackStory />
      </div>
    );
  }
}

export default Protocol;
