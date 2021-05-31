import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
export class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  modalClose = () => this.setState({ show: false });
  modalShow = () => this.setState({ show: true });
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col lg={12} md={12} sm={12} className="videoCard">
              <div>
                <p className="videoTitle">Who am I?</p>
                <p className="videoDes">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
                <p>
                  <FontAwesomeIcon
                    onClick={this.modalShow}
                    className="playBtn"
                    icon={faPlayCircle}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
