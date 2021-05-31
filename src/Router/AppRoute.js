import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ServicesPage from '../pages/ServicesPage';
import HomePage from '../pages/HomePage';
import AllCourse from '../pages/AllCourse';
import ContactSectionMain from '../pages/ContactSectionMain';
import PortfolioMain from '../pages/PortfolioMain';
import AboutPage from '../pages/AboutPage';
export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={ServicesPage} />
          <Route exact path="/course" component={AllCourse} />
          <Route exact path="/portfolio" component={PortfolioMain} />
          <Route exact path="/contact" component={ContactSectionMain} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
