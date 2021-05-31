import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
export class ClientReview extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 30000,
      speed: 3000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Client Say</h1>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="clientImg"
                    src="https://orbitocp.com/storage/avatars/173043041.png"
                    alt=""
                  />
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    I build native and cross platfrom mobile app for your
                    business and instiution as per as your requirements.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="clientImg"
                    src="https://orbitocp.com/storage/avatars/173043041.png"
                    alt=""
                  />
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    I build native and cross platfrom mobile app for your
                    business and instiution as per as your requirements.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="clientImg"
                    src="https://orbitocp.com/storage/avatars/173043041.png"
                    alt=""
                  />
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    I build native and cross platfrom mobile app for your
                    business and instiution as per as your requirements.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
