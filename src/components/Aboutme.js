import React from "react";
import { Container } from "react-bootstrap";

const Aboutme = () => {
  return (
    <Container className="mt-4" id="aboutme">
      <h1 className="text-center">SOBRE MI</h1>
      <hr></hr>
      <p className="text-center text mt-3 mb-5">
        Soy Ingeniera en Sistemas y apenas obtuve mi título comencé a
        desarrollar sitios web programando en PHP. Por cuestiones personales
        decidí dedicarme a otra cosa por mucho tiempo y dejé la programación.
      </p>
      <p className="text-center text mt-3 mb-5">
        Recientemente comencé a entrar de nuevo en el mundo de los sistemas y
        retomé el desarrollo web creando una landing page con Wordpress. Hice un
        curso de Fullstack y aprendí más a fondo Html, Css, Boostrap,
        Javascript, React, NodeJs y MongoDb. Durante el curso trabajé en grupo,
        aprendí metodologías ágiles (SCRUM) y desarrollé 3 proyectos aplicando
        las tecnologías aprendidas. Mi propósito es seguir actualizándome y
        profundizando mis conocimientos cada día para desarrollar sitios
        atractivos y altamente funcionales.
      </p>
      <br></br>
    </Container>
  );
};

export default Aboutme;
