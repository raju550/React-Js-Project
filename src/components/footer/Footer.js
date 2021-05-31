import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection text-center">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="serviceName">Follow me</h2>
              <a className="socialLink" href="#">
                <FontAwesomeIcon className="iconColor" icon={faFacebook} />{' '}
                Facebook
              </a>{' '}
              <br />
              <a className="socialLink" href="#">
                {' '}
                <FontAwesomeIcon className="iconColor" icon={faYoutube} />{' '}
                Youtube
              </a>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="serviceName">Address</h2>
              <p className="serviceDescription">Savar,Dhaka</p>
              <p className="serviceDescription socialLink">
                <FontAwesomeIcon icon={faEnvelope} /> ismailtex043@gmail.com
              </p>
              <p className="serviceDescription socialLink">
                <FontAwesomeIcon icon={faPhone} /> 01675212511
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="serviceName">Information</h2>
              <a className="footerLink" href="#">
                About me
              </a>
              <br />
              <a className="footerLink" href="#">
                My Resume
              </a>
              <br />
              <a className="footerLink" href="#">
                Contact me
              </a>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="serviceName">Legal</h2>
              <a href="#" className="footerLink">
                Refund Policy
              </a>
              <br />
              <a href="#" className="footerLink">
                Terms and condition
              </a>
              <br />
              <a href="#" className="footerLink">
                Privecy Policy
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
          <a href="#" className="copyLink">
            Copy right by @Saccral.com
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
