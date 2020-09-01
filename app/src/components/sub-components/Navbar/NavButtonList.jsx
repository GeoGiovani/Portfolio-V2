import React from 'react';
import NavButton from './NavButton.jsx'


function NavButtons() {
  return (
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
  );
}

export default NavButtons;
