import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
const NavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="nav-menu mx-auto  mt-2 shadow p-1 mb-5 bg-body rounded-4"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="./logo192.png" alt="" />
            <span className="colored">MindMentor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto menu">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/about">
                About
              </Link>
              <Link className="nav-item" to="/resources">
                Resources
              </Link>
              <Link className="nav-item" to="/contact">
                Contact
              </Link>
            </Nav>
            <Nav className="gap-4">
              <Link className="btn btn-primary" to="/logout">
                Logout
              </Link>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
              <Link
                className="btn btn-light text-black btn-sign"
                to="/register"
              >
                Sign up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
