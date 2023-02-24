import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Card className="border-0" id="home">
        <Card.Img src="./img/hero2.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text className="text-end text-white mt-5">
            <p className="welcome">
              BIENVENIDO! Hago diseño y desarrollo web y te invito a que mires
              mis trabajos
            </p>
          </Card.Text>
          <div className="d-flex justify-content-end align-items-end pt-3 px-5">
            <Button size="lg" className="bg-button" href="#portfolio">
              <i className="fa-solid fa-book"></i> PORTFOLIO
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      <br></br>
    </>
  );
};

export default Hero;
