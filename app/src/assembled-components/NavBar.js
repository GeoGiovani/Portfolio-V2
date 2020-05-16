import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Navigation from '../components/Navigation.js'

class NavBar extends React.Component {
  render() {
    return (
      <Navigation 
        navItems={
          <ul>



            
            <Link 
              activeClass="active"
              to="Profile"
              spy={true}
              offset={0}
              duration={500}
              smooth={true}
            >
              Profile
            </Link>
          </ul>
        }
        navStyle="TBD"
        navItemsStyle="TBD"
      />
    );
  }
}

export default NavBar;