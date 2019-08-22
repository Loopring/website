import React from 'react';

import './LRC.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';

class LRC extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>CODE</div>
        <Footer />
      </div>
    );
  }
}

export default LRC;
