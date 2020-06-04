import React from 'react';
import Banner from '../components/Banner.js'
import PortfolioGrid from '../components/PortfolioGrid.js'
import GridComponent from '../components/GridComponent.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import SpaceCanvasMini from '../components/SpaceCanvasMini.js'
import '../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="w-screen h-auto bg-custom-black-800">
      
      <Banner 
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
        header={
          <div className="banner-content text-gray-300">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>
        }
      />

      <div className="project-content bg-custom-black-800">

        <PortfolioGrid 
          wrapperStyle="project-grid-wrapper"
          content={
            <div className="project-grid">

              <GridComponent
                wrapperStyle="grid-card-SwiftCalc"
                content={ 
                  <div className="grid-content bg-custom-yellow-300">
                    <div className="grid-content-overlay bg-custom-yellow-300 bg-opacity-50"></div>
                    <SplitPaneImage 
                      src={require("../media/SwiftCalc.png")}
                      alt="SwiftCalc"
                      outerCardStyle="box-border h-full w-auto overflow-hidden"
                      imageStyle="img-swiftcalc"
                    />
                    <div className="grid-content-details text-custom-black-800 slide-down">
                      <h3>SwiftCalc</h3>
                      <span className="mb-12">Swift / Flutter</span>
                      <p>A minimalist calculator for iOS</p>
                    </div>
                  </div> 
                }
              />

              <GridComponent 
                wrapperStyle="grid-card-MathBender"
                content={ 
                  <div className="grid-content bg-custom-green-400">
                    <div className="grid-content-overlay bg-custom-green-400 bg-opacity-50"></div>
                    <SplitPaneImage 
                      src={require("../media/mathBender.gif")}
                      alt="MathBender"
                      outerCardStyle="box-border h-full flex items-end"
                      imageStyle="img-mathBender"
                    />
                    <div className="grid-content-details text-custom-black-800 slide-left">
                      <h3>MathBender</h3>
                      <span className="mb-12">JavaScript / Node.js</span>
                      <p>A bot that queries Wolfram|Alpha</p>
                    </div>
                  </div> 
                }
              />

              <GridComponent
                wrapperStyle="grid-card-sfunit"
                content={ 
                  <div className="grid-content bg-custom-red-500">
                    <div className="grid-content-overlay bg-custom-red-500 bg-opacity-25"></div>
                    {/* TODO: Showcase SFU work */}
                    <div className="grid-content-details slide-left">
                      <h3>SFUnit</h3>
                      <span> JavaScript / HTML / CSS </span>
                      <p>A web-based survival game</p>
                    </div>
                  </div> 
                }
              />

              <GridComponent
                wrapperStyle="grid-card-detector"
                content={ 
                  <div className="grid-content bg-custom-black-800">
                    <div className="grid-content-overlay"></div>
                    <SplitPaneImage 
                      src={require("../media/STImg.png")}
                      alt="Transition Detector"
                      outerCardStyle="box-border h-full"
                      imageStyle="img-detector h-40"
                    />
                    <div className="grid-content-details slide-left">
                      <h3>School Project</h3>
                      <p>A video Transition Detector</p>
                    </div>
                  </div> 
                }
              />
              
              <GridComponent
                wrapperStyle="grid-card-Portfolio"
                content={ 
                  <div className="grid-content">
                    <div className="grid-content-overlay z-1 bg-custom-black-800 bg-opacity-50"></div>
                    <div className="browser-mockup">
                      <SpaceCanvasMini
                          bgColor="#101010"
                          style={{height: '101%', width: '101%'}}
                        />
                    </div>
                    <div className="grid-content-details grid-thin z-20 slide-up">
                      <h3>Portfolio V2</h3>
                      <p>My interactive portfolio</p>
                    </div>
                  </div> 
                }
              />

            </div> 
          }   
        />    {/* End of PortfolioGrid */}
        
      </div>  {/* End of project-content */}
    </div> 
  );
}

export default Projects;