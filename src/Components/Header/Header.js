import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Navbar, Container, Nav} from "react-bootstrap";

// import "./NavBar.scss"

function Header() {
  return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header