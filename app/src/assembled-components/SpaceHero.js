import React from 'react'
import SpaceCanvas from '../components/SpaceCanvas.js'
import NavButton from '../components/NavButton.js'
import '../styles/index.css';

function SpaceHero() {
  return(
  <div id="Hero">
    
    <div className="space-hero">
      <SpaceCanvas 
        bgColor="#0c0c0c"
        style={{
          height: '100%',
          width: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0,
        }}
      />
    </div>

    <div className="space-hero-name-wrapper">
      <div className="space-hero-name">
        George Giovanis
      </div>
    </div>

    <div className="space-hero-button-wrapper">
      <div className="space-hero-button">
        <NavButton 
          buttonStyle="flex justify-center"
          linkStyle="btn-space"
          to="Profile"
          linkContents={<p className="pointer-events-none">View my work</p>}
        />
      </div>
    </div>
    
  </div>
  );
}

export default SpaceHero;
