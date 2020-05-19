import React from 'react'
import SpaceCanvas from '../components/SpaceCanvas.js'
import '../styles/index.css';

function SpaceHero() {
  return(
  <div id="Hero">
    
    <div className="space-hero">
      <SpaceCanvas 
        bgColor="#000"
        style={{height: '100%', width: '100%', position: 'absolute', top: 0, left: 0}}
      />
    </div>

    <div className="space-hero-name-wrapper">
      <div className="space-hero-name">
        George Giovanis
        <span className="text-custom-red-500"> . </span>
      </div>
    </div>

  </div>
  );
}

export default SpaceHero;
