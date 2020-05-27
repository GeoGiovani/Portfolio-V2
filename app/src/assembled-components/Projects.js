import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="w-screen h-screen bg-custom-black-800 ">
      
      <Banner 
        header={
          <div className="banner-content text-gray-300">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>}
        bannerStyle="profile-banner bg-custom-black-800"
        headerStyle="profile-banner-header bg-custom-black-800"
      />

      <div className="project-content">
        <div className="project-grid-wrapper">
          <div className="project-grid">

            <div class="grid-card-SwiftCalc">

              <div class="grid-content bg-teal-100 rounded-md">
                  <div class="grid-content-overlay bg-custom-black-900 bg-opacity-75"></div>

                  <SplitPaneImage 
                    src={require("../media/SwiftCalc.png")}
                    alt="SwiftCalc"
                    outerCardStyle="box-border h-full overflow-hidden"
                    imageStyle=""
                  />

                  <div class="grid-content-details slide-bottom">
                    <h3>SwiftCalc</h3>
                    <p>A minimalist calculator</p>
                  </div>
              </div>

            </div>

            <div class="row-span-1 col-span-1 bg-custom-red-500 flex items-center justify-center">
              MathBender
            </div>
            <div class="row-span-1 col-span-1 bg-custom-black-900 flex items-center justify-center text-gray-100">
              STIgen
            </div>
            <div class="row-span-1 col-span-2 bg-custom-purple-400 flex items-center justify-center">
              Personal Website
            </div>
          </div>
        </div>{/* End of project-grid */}

      </div>{/* End of project-content */}
    
    {/* End of project div */}
    </div> 
  );
}

export default Projects;