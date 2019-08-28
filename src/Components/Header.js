import React from 'react';
import {NavLink} from 'react-router-dom';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './Header.en.json';
import chineseTranslation from './Header.cn.json';
import I18nComponent from './I18nComponent';

import './Header.scss';

class Header extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);

    this.burgerRef = React.createRef();
    this.menuRef = React.createRef();
  }

  onBurgerClick(e) {
    this.burgerRef.current.classList.toggle('is-active');
    this.menuRef.current.classList.toggle('is-active');
  }

  onLinkClick(e) {
    this.burgerRef.current.classList.remove('is-active');
    this.menuRef.current.classList.remove('is-active');
  }
  render() {
    return (
      <nav
        className="navbar is-spaced is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="logo" draggable="false" src="/images/logo.svg" />
          </a>

          <a
            ref={this.burgerRef}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.onBurgerClick.bind(this)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div ref={this.menuRef} id="navbarMenu" className="navbar-menu">
          <div className="navbar-start has-text-din"></div>
          <div className="navbar-end has-text-din">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-item"
              to="/"
              onClick={this.onLinkClick.bind(this)}
            >
              <div className="pageLink">
                <Translate id="about" />
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navbar-item"
              to="/protocol"
              onClick={this.onLinkClick.bind(this)}
            >
              <div className="pageLink">
                <Translate id="loopring30" />
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navbar-item"
              to="/lrc"
              onClick={this.onLinkClick.bind(this)}
            >
              <div className="pageLink">
                <Translate id="lrc" />
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navbar-item"
              to="/team"
              onClick={this.onLinkClick.bind(this)}
            >
              <div className="pageLink">
                <Translate id="team" />
              </div>
            </NavLink>
            {/*   <NavLink
                activeClassName="active"
                className="navbar-item"
                to="/updates"
              >
                <div className="pageLink">Updates</div>
              </NavLink>*/}
          </div>
        </div>
      </nav>
    );
  }
}

export default withLocalize(Header);
