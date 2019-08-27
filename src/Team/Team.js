import React from 'react';

import './Team.scss';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import CoreTeamSection from './CoreTeamSection.js';
import ContributorsSection from './ContributorsSection.js';

class Team extends React.Component {
  render() {
    return (
      <div className="page-team">
        <Header />
        <div>CODE</div>
        <CoreTeamSection />
        <ContributorsSection />
        <Footer />
      </div>
    );
  }
}

export default Team;
