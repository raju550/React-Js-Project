import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Portfolio from '../components/Protfolio/Portfolio';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export class PortfolioMain extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="portfolio" />
        <TopPage pageTitle="My Portfolio" />
        <Portfolio />
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioMain;
