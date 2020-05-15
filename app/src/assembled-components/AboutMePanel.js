import React from 'react';
import SplitPane from '../components/SplitPane.js'
import SplitPaneCard from '../components/SplitPaneCard.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import Banner from '../components/Banner.js'
import '../styles/index.css';


function AboutMePanel() {
  return (
    <div>
      <Banner 
        header="Profile"
        bannerStyle="banner bg-grey-100"
        headerStyle="banner-header border-custom-grey-800 border-opacity-50"
      />
      <SplitPane 
        left = {
          <SplitPaneCard
            title="About Me"
            content={
              <div>
                <p className="mb-4">
                  Hello! I am a Computer Science student based in Vancouver,
                  BC, who enjoys creating intuitive web and mobile 
                  applications.
                </p>
                <p className="mb-4">
                  I believe that user experience is the most important aspect
                  of an application. My goal is to provide my users with a 
                  great experience by creating robust, well-written application 
                  back-ends with pixel-perfect front-ends. 
                </p>
                <p>
                  I currently study at <a className="font-normal" 
                  href="https://www.sfu.ca/"> Simon Fraser University
                  </a> and volunteer in the <a className="font-normal" 
                  href="https://sfumars.com/people/george-giovanis/"> 
                  Multi-Agent Robotic Systems Laboratory </a>
                  as an Undergraduate Researcher. 
                </p>
              </div> 
            }
            outerCardStyle="card text-custom-grey-900"
            titleStyle="card-title"
            contentStyle="card-content"
          />
        }
        right = {
          <SplitPaneImage 
            src={require("../media/me.jpg")}
            alt="Hey it's me!"
            outerCardStyle="box-border h-96 pt-6 pl-12"
            imageStyle="h-96 border"
          />
        }
        paneStyle="pane bg-grey-100 pb-12"
        paneTitleStyle="flex justify-center font-serif"
        leftPaneStyle="pane-left"
        rightPaneStyle="pane-right"
      />
    </div>
  );
}

export default AboutMePanel;