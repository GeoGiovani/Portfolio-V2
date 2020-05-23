import React from 'react';
import Banner from '../components/Banner.js'
import NightSkyCanvas from '../components/NightSkyCanvas.js'
import '../styles/index.css';


function Profile() {
  return (
    <div id="Profile">      

      <div className="night-sky-canvas">
        <NightSkyCanvas 
          bgColor="#121212" 
          style={{
            height: '100%',
            width: '100%', 
          }}
        />
      </div>

      <div className="box-border w-screen h-auto mt-p3 absolute top-p100 pointer-events-none">
        <Banner
          header="Profile"
          bannerStyle="banner"
          headerStyle="banner-header text-gray-100 text-opacity-75 text-hero-lglg font-bold border-b border-gray-100 border-opacity-50"
          />
      </div>

      <div className="box-border flex items-end justify-center w-screen h-p70 absolute top-p120 z-10">
        <div className="box-border w-p40 h-p70 flex-col content-end justify-end text-center text-gray-300 text-opacity-75 font-roboto font-hairline text-2xl">
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
              I currently study at <a className="font-normal text-custom-red-500" 
              href="https://www.sfu.ca/"> Simon Fraser University
              </a> and volunteer in the <a className="font-normal text-custom-red-500" 
              href="https://sfumars.com/people/george-giovanis/"> 
              Multi-Agent Robotic Systems Laboratory </a>
              as an Undergraduate Researcher. 
            </p>
          </div>
        </div> 
    </div>
  );
}

export default Profile;