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
    <div id="Projects" className="project-page">
      
      <Banner 
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
        header={
          <div className="banner-content">
            <p className="underline-small-projects">
              Projects
            </p>
          </div>
        }
      />

      <div className="project-content">

        <PortfolioGrid 
          wrapperStyle="project-grid-wrapper"
          content={
            <div className="project-grid">

              <GridComponent
                wrapperStyle="grid-card-swiftCalc"
                content={ 
                  <div className="grid-content bg-custom-yellow-300 h-p99">
                    <div className="grid-content-overlay-swiftcalc"></div>
                    <SplitPaneImage 
                      src={require("../media/swiftCalc.png")}
                      alt="SwiftCalc"
                      outerCardStyle="box-border h-full w-auto overflow-hidden"
                      imageStyle="img-swiftcalc"
                    />
                    <div className="grid-content-details slide-down">
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
                wrapperStyle="grid-card-mathBender"
                content={ 
                  <div className="grid-content bg-custom-green-400">
                    <div className="grid-content-overlay-mathBender"></div>
                    <SplitPaneImage 
                      src={require("../media/mathBender.gif")}
                      alt="MathBender"
                      outerCardStyle="box-border h-full flex items-end"
                      imageStyle="img-mathBender w-full"
                    />
                    <div className="grid-content-details slide-left">
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
                  <div className="grid-content bg-custom-red-400">
                    <div className="grid-content-overlay-sfunit"></div>
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
                wrapperStyle="grid-card-portfolio"
                content={ 
                  <div className="grid-content overflow-hidden">
                    <div className="grid-content-overlay-portfolio"></div>
                    <div className="browser-mockup">
                      <SpaceCanvasMini
                          bgColor="#0c0c0c"
                          style={{height: '100%', width: '100%'}}
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