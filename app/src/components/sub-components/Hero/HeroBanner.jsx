import React from 'react'
import data from '../../content/contentDict.jsx'


function HeroBanner() {
  return (
    <div className="hero-banner-wrapper">
      <div className="hero-banner">
        {data["Hero"]["name"]}
      </div>
    </div>
  );
}

export default HeroBanner;
