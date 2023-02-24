import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="./img/logoFS.png" width={70} href="#"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link href="#home" className="menu">
                Inicio
              </Nav.Link>
              <Nav.Link href="#portfolio" className="menu">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#skills" className="menu">
                Conocimientos
              </Nav.Link>
              <Nav.Link href="#aboutme" className="menu">
                Sobre Mí
              </Nav.Link>
              <Nav.Link href="#contact" className="menu">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
