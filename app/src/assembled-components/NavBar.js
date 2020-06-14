import React from 'react';
import Navigation from '../components/Navigation.js'
import NavButton from '../components/NavButton.js'


function NavBar() {
    return (
      <Navigation
        navItems={
          <ul className="nav-list">

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button-hero"
              activeStyle="active-hero"
              to="Hero"
            />

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button-profile"
              activeStyle="active-profile"
              to="Profile"
            />

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button-projects"
              activeStyle="active-projects"
              to="Projects"
            />

          </ul>
        }
        navStyle="navbar"
        navItemsStyle=""
      />
    );
}

export default NavBar;