import React from 'react';
import './Header.scss';

import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-spaced is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="container">
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/codebase">
                Code
              </Link>
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </div>
            <div className="navbar-end">
              <span className="icon is-medium">
                <span className="fa-stack">
                  <i className="fas fa-square fa-stack-2x"></i>
                  <i className="fas fa-paper-plane fa-stack-1x fa-inverse"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
