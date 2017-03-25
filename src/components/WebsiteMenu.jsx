import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router-dom';

const NavLink = ({className, to, text}) => {
  return (
    <div className={className}>
      <Link to={to}>{text}</Link>
    </div>
  );
};

const WebsiteMenu = ({openModalWindowsFunc, selection}) => {

  let activeKey = 2;
  let navItemClass = 'nav-item';

  if (selection && selection === 'menu') {
    activeKey = 1;
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
        {/* TODO: Enable when items + style are ready         
        <NavLink className={navItemClass} to="/menu" text="Menu" />
         */}
        <Nav activeKey={activeKey}>
          <NavItem eventKey={2} href="/#pizzas">
            Pizzas
          </NavItem>
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
