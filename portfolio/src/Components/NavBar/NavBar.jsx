import "./navBar.scss";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <Navbar className="navBar-cont">
      <Container>
        <Nav className="d-flex gap-2">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/project" className="nav-link">
            Project
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
          <Button className="nav-button" variant="light" onClick={handleClick}>
            Contact
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
