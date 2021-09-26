import React from 'react';
import styled from 'styled-components';
import Container from 'react-bulma-components/lib/components/container';
import Navbar from 'react-bulma-components/lib/components/navbar';
import './Navigation.scss';

const NavbarItem = styled(Navbar.Item)`
  margin: 20px 0px !important;
  padding: 4px 16px !important;

  &:hover {
    background-color: transparent !important;
    color: white !important;
  }
`;

const Navigation = (props) => {
  const burgerRef = React.useRef();
  const menuRef = React.useRef();

  const onBurgerClick = () => {
    burgerRef.current.classList.toggle('is-active');
    menuRef.current.classList.toggle('is-active');
  };

  const onLinkClick = () => {
    burgerRef.current.classList.remove('is-active');
    menuRef.current.classList.remove('is-active');
  };

  return (
    <Navbar className="main-navigation has-background-primary">
      <Container style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              className="logo"
              draggable="false"
              src={process.env.PUBLIC_URL + '/images/logo.svg'}
            />
          </Navbar.Item>
          <a
            ref={burgerRef}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={onBurgerClick}
            style={{color: 'white'}}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </Navbar.Brand>

        <div ref={menuRef} id="navbarMenu" className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <NavbarItem
              renderAs="div"
              className="disabled-button"
              onClick={onLinkClick}
            >
              Smart Wallet
            </NavbarItem>
            <NavbarItem
              href={'https://app.' + window.location.hostname}
              onClick={onLinkClick}
            >
              Layer-2 App
            </NavbarItem>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
