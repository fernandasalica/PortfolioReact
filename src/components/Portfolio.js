import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Portfolio = () => {
  return (
    <>
      <Container className="mb-5" id="portfolio">
        <br></br>
        <br></br>
        <h2 className="text-center">PORTFOLIO</h2>
        <hr></hr>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/naturesite.jpg" />
              <Card.Body>
                <Card.Title>Nature Site</Card.Title>
                <Card.Text>
                  Blog de consejos de vida saludable realizado en HTML, Boostrap
                  y Css.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button
                    className="bg-button"
                    href="https://naturesite.netlify.app/index.html"
                    target="_blank"
                  >
                    Visitar sitio
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/rollingresto.jpg" />
              <Card.Body>
                <Card.Title>Rolling Resto</Card.Title>
                <Card.Text>
                  Blog de comidas realizado en HTML, Boostrap, Css y Javascript.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button
                    className="bg-button"
                    href="https://proyecto2-grupo3-rcs2022.netlify.app/index.html"
                    target="_blank"
                  >
                    Visitar sitio
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/rolligfilms.jpg" />
              <Card.Body>
                <Card.Title>Rolling Films</Card.Title>
                <Card.Text>
                  Blog de películas realizado en HTML, Boostrap, Css,
                  Javascript, React, NodeJs, MongoDb.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button
                    className="bg-button"
                    href="https://react-proyecto-3.vercel.app/"
                    target="_blank"
                  >
                    Visitar sitio
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
