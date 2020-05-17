import React from 'react';
import Navigation from '../components/Navigation.js'
import NavButton from '../components/NavButton.js'


function NavBar() {
    return (
      <Navigation
        navItems={
          <ul className="box-border flex justify-end">

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button"
              activeStyle="active-hero"
              to="Hero"
            />

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button"
              activeStyle="active-profile"
              to="Profile"
            />

            <NavButton
              buttonStyle="nav-item"
              linkStyle="nav-button"
              activeStyle="active-projects"
              to="Projects"
            />
            
          </ul>
        }
        navStyle="navbar"
        navItemsStyle="box-border fixed nav-spacing-right"
      />
    );
}

export default NavBar;