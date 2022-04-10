import React from "react";
import { NavLink } from "react-router-dom";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/Header.en.json";
import chineseTranslation from "./i18n/Header.zh.json";
import I18nComponent from "./I18nComponent";
import { LaunchAppSmallButtonStyled } from "./LaunchAppButton";

import "./Header.scss";

class Header extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);

    this.burgerRef = React.createRef();
    this.menuRef = React.createRef();
  }

  onBurgerClick(e) {
    this.burgerRef.current.classList.toggle("is-active");
    this.menuRef.current.classList.toggle("is-active");
  }

  onLinkClick(e) {
    this.burgerRef.current.classList.remove("is-active");
    this.menuRef.current.classList.remove("is-active");
  }
  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
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
                to="/home"
                onClick={this.onLinkClick.bind(this)}
              >
                <div className="pageLink">
                  <Translate id="home" />
                </div>
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="navbar-item"
                to="/about"
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
                to="/blog"
                onClick={this.onLinkClick.bind(this)}
              >
                <div className="pageLink">
                  <Translate id="updates" />
                </div>
              </NavLink>
              <LaunchAppSmallButtonStyled
                variant={"contained"}
                fullWidth={true}
                size={"large"}
                onClick={() => {
                  window.open("https://loopring.io/#/trade/lite/LRC-ETH");
                }}
              >
                <div>Launch App</div>
              </LaunchAppSmallButtonStyled>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withLocalize(Header);
