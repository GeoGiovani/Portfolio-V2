import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import SpaceCanvasMini from '../components/SpaceCanvasMini.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="w-screen h-screen bg-custom-black-800">
      
      <Banner 
        header={
          <div className="banner-content text-gray-300">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>}
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
      />

      <div className="project-content bg-custom-black-800">
        <div className="project-grid-wrapper">
          <div className="project-grid">

            {/* SwiftCalc */}
            <div class="grid-card-SwiftCalc">
              <div class="grid-content bg-custom-yellow-300">
                  <div class="grid-content-overlay"></div>

                  <SplitPaneImage 
                    src={require("../media/SwiftCalc.png")}
                    alt="SwiftCalc"
                    outerCardStyle="box-border h-full overflow-hidden"
                    imageStyle=""
                  />

                  <div class="grid-content-details slide-down">
                    <h3>SwiftCalc</h3>
                    <p>A minimalist calculator for iOS</p>
                  </div>
              </div>
            </div>

            {/* MathBender */}
            <div class="grid-card-MathBender">
              <div class="grid-content bg-custom-green-400">
                <div class="grid-content-overlay"></div>

                <SplitPaneImage 
                  src={require("../media/mathBender.gif")}
                  alt="SwiftCalc"
                  outerCardStyle="box-border h-full flex items-end overflow-auto"
                  imageStyle=""
                />

                <div class="grid-content-details slide-left">
                  <h3>MathBender</h3>
                  <p>A bot that queries Wolfram|Alpha</p>
                </div>
              </div>
            </div>

            {/* SFUnit Game */}
            <div class="row-span-1 col-span-1">
              <div class="grid-content bg-custom-red-500">
                <div class="grid-content-overlay"></div>

                  {/* TODO: Showcase SFU work */}

                <div class="grid-content-details slide-left">
                  <h3>School Project</h3>
                  <p>A web-based survival game</p>
                </div>
              </div>
            </div>

            {/* Transition Detector */}
            <div class="grid-card-detector">
              <div class="grid-content bg-blue-200">
                  <div class="grid-content-overlay"></div>

                  <SplitPaneImage 
                    src={require("../media/STImg.png")}
                    alt="SwiftCalc"
                    outerCardStyle="box-border h-auto flex items-end overflow-auto"
                    imageStyle="h-40"
                  />

                  <div class="grid-content-details slide-left">
                    <h3>School Project</h3>
                    <p>A video Transition Detector</p>
                  </div>
                </div>
            </div>

            {/* Portfolio V2 */}
            <div class="grid-card-Portfolio">
              <div class="grid-content">
                  <div class="grid-content-overlay z-10"></div>

                    <div class="browser-mockup">
                      <SpaceCanvasMini
                          bgColor="#101010"
                          style={{height: '101%', width: '101%'}}
                        />
                    </div>

                  <div class="grid-content-details details-thin z-20 slide-up">
                    <h3>Portfolio V2</h3>
                    <p>My interactive portfolio</p>
                  </div>
              </div>
            </div>

          </div>
        </div>{/* End of project-grid */}

      </div>{/* End of project-content */}
    
    {/* End of project div */}
    </div> 
  );
}

export default Projects;