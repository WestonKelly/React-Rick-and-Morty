import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/330px-Rick_and_Morty.svg.png"
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt="Rick and Morty"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
            <Nav.Link as={Link} to="/episodes">Episodes</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NavigationBar;
  