import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import '../styles/index.css';


function Profile() {
  return (
    <div id="Profile" className="h-screen w-screen bg-custom-black-800">

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
                Hello! I'm a Computer Science student based in Vancouver,
                BC.
              </p>
              <p className="mb-4">
                I love creating intuitive web and mobile applications. My 
                goal is to provide users with fast, enjoyable, and reliable
                applications.
              </p>
              <p>
                I currently study at <a className="profile-text-link" 
                href="https://www.sfu.ca/"> Simon Fraser University
                </a> and volunteer in the <a className="profile-text-link" 
                href="https://sfumars.com/people/george-giovanis/"> 
                MARS Laboratory</a> as an undergraduate researcher.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="profile-image-wrapper">
            <SplitPaneImage 
              src={require("../media/me.jpg")}
              alt="Catch you next time!"
              outerCardStyle="profile-image-outer"
              imageStyle="h-96 border-8 border-custom-grey-900 rounded-circle"
            />
          </div>
      </div>
      
    </div>
  );
}

export default Profile;