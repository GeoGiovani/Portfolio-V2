import React from 'react';
import GridComponent from '../GridComponent.jsx'
import LinkButton from '../LinkButton.jsx'
import SpaceCanvasMini from '../SpaceCanvasMini.jsx'


function PortfolioV2() {
  return (
    <GridComponent
      wrapperStyle="grid-card-portfolio"
      content={ 
        <div className="grid-content overflow-hidden">
          <div className="grid-content-overlay-portfolio"></div>
          <div className="browser-mockup">
            <SpaceCanvasMini />
          </div>
          <div className="grid-content-details grid-thin z-20 slide-up">
            <div className="grid-content-inner-portfolio">
              <h3>Portfolio V2</h3>
              <span>React.js / JavaScript / Tailwind CSS</span>
              <div className="flex w-full justify-center">
                <LinkButton
                  link="https://github.com/GeoGiovani/Portfolio-V2"
                  content="View More"
                  buttonStyle="btn-project"
                />
              </div>
            </div>
          </div>
        </div> 
      }
    />
  );
  }

  export default PortfolioV2;
  