import Container from 'react-bootstrap/Container';
import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { AppContext } from './AppContext';

import { NavLink } from 'react-router-dom' 

export default function NavBarComponent() {

  const {cart } = useContext(AppContext);

  const cartItemCount = Object.keys(cart).length;

  return (
    <Navbar className="navbar-nav" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">PVS E-COMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/womens-clothing" className="nav-link">WOMEN</NavLink>
            <NavLink to="/mens-clothing" className="nav-link">MEN</NavLink>
            <NavLink to="/electronics" className="nav-link">ELECTRONICS</NavLink>
            <NavLink to="/jewelry" className="nav-link">JEWELRY</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink className="nav-link cart-logo-navlink" to="/shopping-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>{cartItemCount > 0 && (
                <Badge bg="danger">{cartItemCount}</Badge>
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}