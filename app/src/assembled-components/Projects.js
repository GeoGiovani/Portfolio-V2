import React from 'react';
import NightSkyCanvas from '../components/NightSkyCanvas.js'
import Banner from '../components/Banner.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="relative z-neg">

      <div className="night-sky-canvas">
        <NightSkyCanvas 
          bgColor="#0c0c0c" 
          style={{
            height: '100%',
            width: '100%', 
          }}
        />
      </div>
      
      <Banner 
        header={
          <div className="banner-content text-gray-300 text-opacity-75">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>}
        bannerStyle="profile-banner absolute top-0 pointer-events-none"
        headerStyle="profile-banner-header"
      />
 
    </div>
  );
}

export default Projects;