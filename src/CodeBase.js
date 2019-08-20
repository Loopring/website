import React from 'react';
import logo from './logo.svg';
import './CodeBase.scss';

import Header from './Header.js';

class CodeBase extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>CODE</div>
      </div>
    );
  }
}

export default CodeBase;
