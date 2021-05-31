import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/footer/Footer';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export class ServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="service" />
        <TopPage pageTitle="My services" />
        <Services />
        <ContactSection />
        <Footer />
      </Fragment>
    );
  }
}

export default ServicesPage;
