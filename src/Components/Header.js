import React from 'react';
import './Header.scss';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  onClick() {
    console.log('clicked');
  }
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
            data-target="navbarMenu"
            onClick={this.onClick()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="container">
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start has-text-din">
              <Link className="navbar-item" to="/">
                About
              </Link>
              <Link className="navbar-item" to="/protocol">
                Loopring 3.0
              </Link>
              <Link className="navbar-item" to="/lrc">
                LRC
              </Link>
              <Link className="navbar-item" to="/team">
                Team
              </Link>

              {/*        <Link className="navbar-item" to="/updates">
                Updates
              </Link>*/}

              {/*   <Link className="navbar-item" to="/blog">
                Blog
              </Link>*/}
            </div>
            <div className="navbar-end">
              <img className="logo" draggable="false" src="images/logo.svg" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
