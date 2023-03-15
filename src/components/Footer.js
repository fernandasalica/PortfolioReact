import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="social">
          <Link
            target={"_blank"}
            to={"https://www.facebook.com/profile.php?id=1118830091"}
          >
            <i className="fa-brands fa-facebook p-3 social-color"></i>
          </Link>
          <Link target={"_blank"} to={"https://www.instagram.com/mfsalica/"}>
            <i className="fa-brands fa-square-instagram  p-3 social-color"></i>
          </Link>
          <Link target={"_blank"} to={"https://github.com/fernandasalica"}>
            <i className="fa-brands fa-github  p-3 social-color"></i>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home" className="link">
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
        <p className="text-center bg-black p-3 text-white fs-6">
          Copyright © 2023 - Todos los derechos reservados
        </p>
      </div>
    </>
  );
};

export default Footer;
