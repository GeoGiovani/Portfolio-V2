import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import SpaceCanvasMini from '../components/SpaceCanvasMini.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="w-screen h-screen bg-gray-100 ">
      
      <Banner 
        header={
          <div className="banner-content text-custom-black-800">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>}
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
      />

      <div className="project-content">
        <div className="project-grid-wrapper">
          <div className="project-grid">

            <div class="grid-card-SwiftCalc">
              <div class="grid-content bg-purple-200">
                  <div class="grid-content-overlay"></div>

                  <SplitPaneImage 
                    src={require("../media/SwiftCalc.png")}
                    alt="SwiftCalc"
                    outerCardStyle="box-border h-full overflow-hidden"
                    imageStyle=""
                  />

                  <div class="grid-content-details slide-down">
                    <h3>SwiftCalc</h3>
                    <p>A minimalist calculator</p>
                  </div>
              </div>
            </div>

            <div class="grid-card-MathBender">
              <div class="grid-content bg-purple-200">
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

            <div class="row-span-1 col-span-1 rounded-md bg-red-200 flex items-center justify-center text-gray-100">
              {/* STIgen */}
            </div>

            <div class="row-span-1 col-span-1">
              <div class="grid-content bg-red-200">
                  <div class="grid-content-overlay"></div>

                    {/* TODO: Showcase SFU work */}

                  <div class="grid-content-details slide-left">
                    <h3>S.F.U.</h3>
                    <p>A web-based survival game</p>
                  </div>
                </div>
            </div>

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
                    <p>An interactive portfolio for myself</p>
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