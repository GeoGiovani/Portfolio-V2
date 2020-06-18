import React from 'react';
import SwiftCalc from './GridComponents/SwiftCalc.jsx'
import MathBender from './GridComponents/MathBender.jsx'
import SFUnit from './GridComponents/SFUnit.jsx'
import TransitionDetector from './GridComponents/TransitionDetector.jsx'
import PortfolioV2 from './GridComponents/PortfolioV2.jsx'


function ProjectsContent() {
  return (
    <div className="project-content">
      <div className="project-grid-wrapper">
        <div className="project-grid">

          <SwiftCalc />
          <MathBender />
          <SFUnit />
          <TransitionDetector />
          <PortfolioV2 />

        </div> 
      </div>
    </div>
  );
}

export default ProjectsContent;
