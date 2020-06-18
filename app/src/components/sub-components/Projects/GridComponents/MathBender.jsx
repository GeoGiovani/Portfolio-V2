import React from 'react';
import GridComponent from '../GridComponent.jsx'
import LinkButton from '../LinkButton.jsx'
import Image from '../../Image.jsx'


function MathBender() {
  return (
    <GridComponent 
      wrapperStyle="grid-card-mathBender"
      content={ 
        <div className="grid-content bg-custom-green-400 h-p99">
          <div className="grid-content-overlay-mathBender"></div>
          <Image 
            src={require("../../../media/mathBender.gif")}
            alt="MathBender"
            imageWrapperStyle="box-border h-full flex items-end"
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
  );
}

export default MathBender;
