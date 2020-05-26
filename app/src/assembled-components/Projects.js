import React from 'react';
import Banner from '../components/Banner.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="w-screen h-screen bg-gray-100">
      
      <Banner 
        header={
          <div className="banner-content text-custom-black-900">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>}
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
      />

      <div className="project-content flex justify-center items-center box-border w-screen h-auto mt-12 font-roboto font-custom-black-900 text-5xl">
        <div className="project-grid flex items-center w-p80 h-142">
          <div className="grid grid-rows-2 grid-cols-3 gap-1 box-border w-full h-full">

            {/* SwiftCalc Grid */}
            <div class="grid-card-SwiftCalc row-span-2 col-span-1 bg-custom-green-400 bg-opacity-50 flex items-center justify-center shadow-xl relative">
              SwiftCalc
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