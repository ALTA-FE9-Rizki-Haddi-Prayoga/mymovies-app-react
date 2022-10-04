import React from "react";
import "../styles/style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavbarMovies = () => {
  return (
    <>
      <Navbar className="Navbar-Movies container-fluid" expand="lg">
        <Container className="Navbar-Nav">
          <Navbar.Brand href="#home" className="LogoMovies">
            <img src={logo} alt="Logo Movies" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse className="Navbar-List">
            <Nav className="gap-2">
              <a href="#home" className="List">
                HOME
              </a>
              <a href="#favorite" className="List">
                FAVORITES
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="container-fluid text-white"/>
    </>
  );
};

export default NavbarMovies;
