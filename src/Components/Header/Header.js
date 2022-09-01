import React from 'react';
import { Navbar, Container, Nav} from "react-bootstrap";

// import "./Nav.scss"

function Header() {
  return (
    <div id="NavBar-wrapper">
      <Navbar expand="lg" className="white-bg">
        <Container className="header">
          <Navbar.Brand href="/">"TeacherGiving"</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/info" style={{color: "black"}}>What is "TeacherGiving"</Nav.Link>
              <Nav.Link href="/stories" style={{color: "black"}}>Stories</Nav.Link>
              <Nav.Link href="/about" style={{color: "black"}}>About</Nav.Link>
              <Nav.Link href="/faq" style={{color: "black"}}>Q&A's</Nav.Link>
              <Nav.Link href="/support" style={{color: "black"}}>Support</Nav.Link>
              <Nav.Link href="/contact" style={{color: "black"}}>Contact Us</Nav.Link>
              </Nav>
              <Nav className="justify-content-lg-end member-op">
              <Nav.Link href="/sign_up" style={{color: "black"}}>Sign Up</Nav.Link><p className="or">or</p> <Nav.Link href="/log_in" style={{color: "black"}}>Log In</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header