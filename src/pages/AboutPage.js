import React, { Component, Fragment } from 'react';
import About from '../components/AboutDes/About';
import TopPage from '../components/TopPage/TopPage';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/footer/Footer';
export class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pageTitle="About Me" />
        <About />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
