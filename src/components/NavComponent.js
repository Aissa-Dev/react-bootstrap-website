import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
function NavComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="py-3 fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="">Trevel Easy</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#1">
              <h6 className="">Flight Reservation</h6>
            </Nav.Link>
            <Nav.Link href="#2">
              <h6 className="">Planing and Services</h6>
            </Nav.Link>
            <Nav.Link href="#3">
              <h6 className="">FAQ</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
