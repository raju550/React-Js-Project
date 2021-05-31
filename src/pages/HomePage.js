import React, { Component, Fragment } from 'react';
import Video from 'video-react/lib/components/Video';
import Analysis from '../components/analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/footer/Footer';
import OurCourses from '../components/ourCourses/OurCourses';
import RecentProject from '../components/recentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Home" />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <OurCourses />
        <Video />
        <ClientReview />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
