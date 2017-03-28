import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import {HashLink as Link} from 'react-router-hash-link';

const NavLink = ({to, text}) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

const WebsiteMenu = ({openModalWindowsFunc, selection}) => {
  let activeKey = 1;
  let navItemClass = 'nav-item';

  if (selection && selection === 'menu') {
    activeKey = 2;
    navItemClass = 'nav-item active';
  }

  return (
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">D'Pizza</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={activeKey}>
          <NavItem eventKey={1} href="/#pizzas">
            Pizzas
          </NavItem>
          {/* TODO: Enable when items + style are ready */}
          <NavDropdown eventKey={2} title="Menu" id="basic-nav-dropdown">
            <NavLink to="/menu#pastas" text="Pastas" />
            <MenuItem divider />
            <NavLink to="/menu#hamburguesas" text="Hamburguesas / Choripan / Shawarma" />
            <MenuItem divider />
            <NavLink to="/menu#bebidas" text="Bebidas" />
            <MenuItem divider />
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={openModalWindowsFunc.order}>
            Ordena
          </NavItem>
          <NavItem eventKey={2} onClick={openModalWindowsFunc.schedule}>
            Horarios
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

WebsiteMenu.propTypes = {
  openModalWindowsFunc: React.PropTypes.object.isRequired,
  selection: React.PropTypes.string,
};

export default WebsiteMenu;
