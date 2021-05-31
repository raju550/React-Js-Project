import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class TopPage extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContent">
              <Row>
                <Col className="text-center">
                  <h4 className="pageTitle">{this.props.pageTitle}</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopPage;
