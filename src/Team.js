import React from 'react';

import './Team.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';
import SectionContributors from './Sections/SectionContributors.js';
import SectionCoreTeam from './Sections/SectionCoreTeam.js';

class Team extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>CODE</div>
        <SectionCoreTeam />
        <SectionContributors />
        <Footer />
      </div>
    );
  }
}

export default Team;
