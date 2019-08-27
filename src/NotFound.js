import React from 'react';

import './NotFound.scss';

import Header from './Components/Header.js';

class NotFound extends React.Component {
  render() {
    return (
      <div className="page-notfound">
        <Header />
      </div>
    );
  }
}

export default NotFound;
