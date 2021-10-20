import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
function NavComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home">Dev School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#learn">What you will learn</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
