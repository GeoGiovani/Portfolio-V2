import React from 'react';
import GridComponent from '../GridComponent.jsx'
import LinkButton from '../LinkButton.jsx'
import Image from '../../Image.jsx'


function SwiftCalc() {
  return (
    <GridComponent
      wrapperStyle="grid-card-swiftCalc"
      content={ 
        <div className="grid-content bg-custom-yellow-300 h-p99">
          <div className="grid-content-overlay-swiftcalc"></div>
          <Image 
            src={require("../../../media/swiftCalc.png")}
            alt="SwiftCalc"
            imageWrapperStyle="box-border h-full w-auto overflow-hidden"
            imageStyle="img-swiftcalc"
          />
          <div className="grid-content-details slide-down">
            <div className="grid-content-inner-swiftCalc">
              <h3>SwiftCalc</h3>
              <span>Swift / Flutter</span>
              <LinkButton
                link="https://gitlab.com/incrementle/swiftcalc-ios/-/tree/dev"
                content="View More"
                buttonStyle="btn-project"
              />
            </div>
          </div>
        </div> 
      }
    />
  );
}

export default SwiftCalc;
