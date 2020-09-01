import React from 'react';
import GridComponent from '../GridComponent.jsx'
import LinkButton from '../LinkButton.jsx'


function SFUnit() {
  return (          
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
                  link="https://github.com/GeoGiovani/SFU-Special-Fortification-Unit"
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
export default SFUnit;
