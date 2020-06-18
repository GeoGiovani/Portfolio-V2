import React from 'react'
import SpaceCanvas from '../sub-components/Hero/SpaceCanvas.jsx'
import HeroButton from '../sub-components/Hero/HeroButton.jsx';
import HeroBanner from '../sub-components/Hero/HeroBanner.jsx';
import '../../styles/index.css';


function Hero() {
  return(
    <div id="Hero" className="hero">
      <SpaceCanvas />
      <HeroBanner />
      <HeroButton />
    </div>
  );
}

export default Hero;
