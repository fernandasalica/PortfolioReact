import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <Container className="image" id="contact">
        <div className="fondo">
          <h2 className="text-center mt-5 text-white">CONTACTO</h2>
          <h5 className="text-white text-center my-3">
            Contactate y haceme llegar tu comentario, opinión...
          </h5>
          <Form
            className="form"
            action="https://formspree.io/f/xvoldrwl"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input form"
                type="text"
                placeholder="Nombre"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input form"
                type="email"
                placeholder="Email"
                name="email"
                required
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
                name="message"
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
