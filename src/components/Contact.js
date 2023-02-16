import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <Container className="image" id="contact">
        <div className="fondo">
          <h1 className="text-center mt-5 text-white">CONTACTO</h1>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input form"
                type="text"
                placeholder="Nombre"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input form"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                className="input form"
                placeholder="Mensaje"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="bg-button" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
