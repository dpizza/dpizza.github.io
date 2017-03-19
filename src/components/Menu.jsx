import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const Menu = ({openModalWindowsFunc}) => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">D'Pizza</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#menu">Menu</NavItem>
        <NavItem eventKey={2} href="#pizzas" className="active">Pizzas</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} onClick={openModalWindowsFunc.order}>Ordena</NavItem>
        <NavItem eventKey={2} onClick={openModalWindowsFunc.schedule}>Horarios</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
