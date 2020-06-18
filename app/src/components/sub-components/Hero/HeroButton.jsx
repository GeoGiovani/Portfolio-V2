import React from 'react'
import NavButton from '../Navbar/NavButton.jsx'
import data from '../../content/contentDict.jsx'


function HeroButton() {
  return (
    <div className="hero-button-wrapper">
      <NavButton 
        buttonStyle="flex justify-center"
        linkStyle="btn-hero"
        to="Profile"
        linkContents={
          <p className="pointer-events-none">
            {data["Hero"]["btn"]}
          </p>
        }
      />
    </div>
  );
}

export default HeroButton;