import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import TopPage from '../components/TopPage/TopPage';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Course from '../components/Course/Course';

export class AllCourse extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="course" />
        <TopPage pageTitle="All Course" />
        <Course />
        <Footer />
      </Fragment>
    );
  }
}

export default AllCourse;
