import React from "react";
import "../styles/style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavbarMovies = () => {
  return (
    <>
      <Navbar className="Navbar-Movies container-fluid" expand="lg">
        <Container className="Navbar-Nav">
          <Navbar.Brand href="#home" className="LogoMovies">
            <img src={logo} alt="Logo Movies" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse className="Navbar-List">
            <Nav className="gap-2">
              <Link className="List" to={"/"}>
                HOME
              </Link>
              <Link className="List" to={"/favorite"}>
                FAVORITES
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="container-fluid text-white" />
    </>
  );
};

export default NavbarMovies;
