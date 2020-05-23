import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import '../styles/index.css';


function Profile() {
  return (
    <div id="Profile" className="h-screen w-screen bg-gray-100">

      <Banner 
        header={
          <div className="banner-content">
            <p className="underline-small">
              Profile
            </p>
          </div>}
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
      />

      <div className="profile-content">
          <div className="profile-pane-left">

            {/* Text */}
            <div className="profile-text">
              <p className="mb-4">
                Hello! I'm a third-year Computer Science student
                based in Vancouver, BC. I currently study at 
                <a className="profile-text-link" 
                href="https://www.sfu.ca/"> Simon Fraser University
                </a> and volunteer in the <a className="profile-text-link" 
                href="https://sfumars.com/people/george-giovanis/"> 
                MARS Laboratory</a> as an undergraduate researcher.
              </p>
              <p className="mb-8">
                I love creating intuitive web and mobile applications. My 
                goal is to provide users with fast, enjoyable, and reliable
                software. To do this, I develop using proven 
                software-engineering and testing methods.
              </p>
              <p className="text-gray-900 mb-4 underline">
                Here are a few technologies I've used in my projects: 
              </p>

              {/* Footer */}
              <div className="mb-4 text-xl">
                <span className="profile-tech">React</span>
                <span className="profile-tech">Node.js</span>
                <span className="profile-tech">JavaScript (ES6)</span>
                <span className="profile-tech">HTML & CSS</span>
                <span className="profile-tech">Flask</span>
                <span className="profile-tech">Swift</span>
                <span className="profile-tech">Flutter</span>
                <span className="profile-tech">Python</span>
                <span className="profile-tech">C/C++</span>
                <span className="profile-tech">Java</span>
                <span className="profile-tech">Julia</span>
              </div>
              <div className="text-xl">

              </div>
            </div>
          </div>

          {/* Image */}
          <div className="profile-image-wrapper">
            <SplitPaneImage 
              src={require("../media/me.jpg")}
              alt="Catch you next time!"
              outerCardStyle="profile-image-outer"
              imageStyle="h-96 border-6 border-gray-900 rounded-circle shadow-inner"
            />
          </div>
      </div>
      
    </div>
  );
}

export default Profile;