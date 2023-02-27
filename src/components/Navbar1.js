import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <Container>
          <Navbar.Brand>
            <a href="#home">
              <img src="./img/logoFS.png" width={70} alt="logo"></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
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
