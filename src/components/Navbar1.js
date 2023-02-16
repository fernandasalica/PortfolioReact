import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="text-black" id="inicio">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./img/logomariposa.png" width={80}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#inicio" className="link menu">
                Inicio
              </Nav.Link>
              <Nav.Link href="#portfolio" className="link menu">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#skills" className="link menu">
                Conocimientos
              </Nav.Link>
              <Nav.Link href="#aboutme" className="link menu">
                Sobre Mí
              </Nav.Link>
              <Nav.Link href="#contact" className="link menu">
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
