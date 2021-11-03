import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#" className="">Document Translator</Navbar.Brand>
        </Container>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-OverflowSet root-145">
              <Nav.Link href="#notifications">Notifications</Nav.Link>
              <Nav.Link href="#feedback">Feedback</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </>
  );
};

export default Header;
