import React from 'react';
import Banner from '../components/Banner.js'
import PortfolioGrid from '../components/PortfolioGrid.js'
import GridComponent from '../components/GridComponent.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import SpaceCanvasMini from '../components/SpaceCanvasMini.js'
import LinkButton from '../components/LinkButton.js'
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
                      <div className="grid-content-inner-swiftCalc">
                        <h3>SwiftCalc</h3>
                        <span>Swift / Flutter</span>
                        <LinkButton
                          link=""
                          content="View More"
                          buttonStyle="btn-project"
                        />
                      </div>
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
                      <div className="grid-content-inner-mathBender">
                        <h3>MathBender</h3>
                        <span>JavaScript / Node.js</span>
                        <LinkButton
                          link=""
                          content="View More"
                          buttonStyle="btn-project"
                        />
                      </div>
                    </div>
                  </div> 
                }
              />

              <GridComponent
                wrapperStyle="grid-card-sfunit"
                content={ 
                  <div className="grid-content bg-custom-red-500">
                    <div className="grid-content-overlay bg-custom-red-500 bg-opacity-25"></div>
                    <div className="grid-content-details slide-right">
                      <div className="grid-content-inner-sfunit">
                        <h3>SFUnit</h3>
                        <div className="grid-content-inner-thin">
                          <span>JavaScript / HTML</span>
                          <LinkButton
                            link=""
                            content="View More"
                            buttonStyle="btn-project"
                          />
                        </div>
                      </div>
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
                    <div className="grid-content-details slide-right">
                      <div className="grid-content-inner-detector">
                        <h3>Transition</h3>
                        <div className="grid-content-inner-thin">
                          <span>React.js / Flask</span>
                          <LinkButton
                            link=""
                            content="View More"
                            buttonStyle="btn-project"
                          />
                        </div>
                      </div>
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
                      <div className="grid-content-inner-portfolio">
                        <h3>Portfolio V2</h3>
                        <span>React.js / JavaScript / Tailwind CSS</span>
                        <div className="flex w-full justify-center">
                          <LinkButton
                            link=""
                            content="View More"
                            buttonStyle="btn-project"
                          />
                        </div>
                      </div>
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