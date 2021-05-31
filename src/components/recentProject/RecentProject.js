import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">RECENT PROJECT</h1>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
