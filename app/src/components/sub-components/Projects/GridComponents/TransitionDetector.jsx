import React from 'react';
import GridComponent from '../GridComponent.jsx'
import LinkButton from '../LinkButton.jsx'
import Image from '../../Image.jsx'

function TransitionDetector() {
  return (
    <GridComponent
      wrapperStyle="grid-card-detector"
      content={ 
        <div className="grid-content bg-custom-black-800">
          <div className="grid-content-overlay"></div>
          <Image 
            src={require("../../../media/STImg.png")}
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
  );
}

export default TransitionDetector;