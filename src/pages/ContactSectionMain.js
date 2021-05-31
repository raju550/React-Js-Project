import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export class ContactSectionMain extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="contact" />
        <TopPage pageTitle="My Contact" />
        <ContactSection />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactSectionMain;
