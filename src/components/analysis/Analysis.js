import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

export class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: 'Python', Projects: 100 },
        { Technology: 'React', Projects: 40 },
        { Technology: 'Sql', Projects: 90 },
        { Technology: 'HTML', Projects: 95 },
        { Technology: 'Java', Projects: 60 },
        { Technology: 'React', Projects: 90 },
        { Technology: 'PHP', Projects: 100 },
        { Technology: 'Angular', Projects: 65 },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <Row>
            <Col
              style={{ width: '100%', height: '300px' }}
              lg={6}
              md={12}
              sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill="#0073E6"></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify des">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
