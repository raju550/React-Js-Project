import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h2 className="serviceName">Quick Connect</h2>
              <Form>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Your Name
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Message
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h2 className="serviceName">Discuss Now</h2>
              <p className="serviceDescription">Savar,Dhaka</p>
              <p className="serviceDescription"> ismailtex043@gmail.com</p>
              <p className="serviceDescription">01675212511</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactSection;
