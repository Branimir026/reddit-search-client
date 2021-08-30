import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function Navigation() {
  return (
    <>
      <Navbar className="bg-primary navbar-dark mb-5">
        <Container>
          <Navbar.Brand>Reddit search client</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
