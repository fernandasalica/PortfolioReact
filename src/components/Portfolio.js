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
        <h1 className="text-center">PORTFOLIO</h1>
        <hr></hr>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/naturesite.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button className="bg-button">Visitar sitio</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/rollingresto.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button className="bg-button">Visitar sitio</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/rolligfilms.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Footer className="bg-white p-1">
                  <Button className="bg-button">Visitar sitio</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}
        </Row>
      </Container>
      {/* </section> */}
    </>
  );
};

export default Portfolio;
