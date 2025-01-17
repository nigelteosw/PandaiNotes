import React from "react";
import { Container, Row, Form, Col } from "react-bootstrap";

// placeholder searchbar to filter modules in ModuleFileExplorer
const Searchbar = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Current File :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="texttext.txt" />
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Searchbar;
