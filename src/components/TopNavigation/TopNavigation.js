import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import fristLogo from '../../asset/image/favicon.png';
import secondLogo from '../../asset/image/favicon1.png';
import '../../asset/css/custom.css';
import { NavLink } from 'react-router-dom';

export class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: 'navTitle',
      navBarLogo: [fristLogo],
      navColor: 'navBackground',
      navBarMenu: 'navItem',
      navVariant: 'dark',
      winTitle: props.title,
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: 'navTitleScroll',
        navBarLogo: [secondLogo],
        navColor: 'navBackgroundScroll',
        navBarMenu: 'navItemScroll',
        navVariant: 'light',
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: 'navTitle',
        navBarLogo: [fristLogo],
        navColor: 'navBackground',
        navBarMenu: 'navItem',
        navVariant: 'dark',
      });
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <title>{this.state.winTitle}</title>
        <Navbar
          className={this.state.navColor}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVariant}>
          <Navbar.Brand className={this.state.navBarTitle}>
            <img src={this.state.navBarLogo} width="35px" /> Ismail Hossain
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>
                <NavLink className={this.state.navBarMenu} to="/">
                  HOME
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className={this.state.navBarMenu} to="/service">
                  SERVICES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: 'blue' }}
                  className={this.state.navBarMenu}
                  to="/course">
                  COURSES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: 'blue' }}
                  className={this.state.navBarMenu}
                  to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: 'blue' }}
                  className={this.state.navBarMenu}
                  to="/contact">
                  CONTACT
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: 'blue' }}
                  className={this.state.navBarMenu}
                  to="/about">
                  ABOUT
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
