import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner summarySection p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countMargin">
                    <Col>
                      <h1 className="countNumber">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total Project</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">
                        <CountUp start={0} end={200}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total clients</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12} className="cardTopDown">
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        How to work?
                      </Card.Title>
                      <Card.Text className="text-left p-3">
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconColor"
                            icon={faCheckCircle}
                          />{' '}
                          Analysis
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconColor"
                            icon={faCheckCircle}
                          />{' '}
                          Implementation
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconColor"
                            icon={faCheckCircle}
                          />{' '}
                          Coding Testing
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconColor"
                            icon={faCheckCircle}
                          />{' '}
                          System Analysis
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
