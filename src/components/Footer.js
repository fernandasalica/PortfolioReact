import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="social">
          <i className="fa-brands fa-facebook p-3"></i>
          <i className="fa-brands fa-square-instagram  p-3"></i>
          <i className="fa-brands fa-github  p-3"></i>
        </div>
        <div className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#inicio" className="link">
              Inicio
            </Nav.Link>
            <Nav.Link href="#portfolio" className="link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#skills" className="link">
              Conocimientos
            </Nav.Link>
            <Nav.Link href="#aboutme" className="link">
              Sobre Mí
            </Nav.Link>
            <Nav.Link href="#contact" className="link">
              Contacto
            </Nav.Link>
          </Nav>
        </div>
      </Container>
      <div className="my-4">
        <p className="text-center bg-black p-3 text-white">
          Copyright © 2023 - Todos los derechos reservados
        </p>
      </div>
    </>
  );
};

export default Footer;
