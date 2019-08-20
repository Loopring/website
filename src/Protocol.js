import React from 'react';
import logo from './logo.svg';
import './Protocol.scss';

import Header from './Header.js';
import Section1 from './Protocol/Section1.js';

class Protocol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
      </div>
    );
  }
}

export default Protocol;
