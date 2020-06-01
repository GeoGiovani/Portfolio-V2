import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import '../styles/index.css';


function Profile() {
  return (
    <div id="Profile" className="profile-page">

      <Banner 
        header={
          <div className="banner-content text-gray-300">
            <p className="underline-small">
              Profile
            </p>
          </div>}
        bannerStyle="profile-banner"
        headerStyle="profile-banner-header"
      />

      <div className="profile-content">
          <div className="profile-pane-left">
            <div className="profile-text">
              <p className="mb-4">
                Hello! I'm a third-year Computer Science student
                based in Vancouver, BC. I currently study at&nbsp;
                <a className="profile-link text-custom-yellow-300 font-bold" 
                href="https://www.sfu.ca/">Simon Fraser University
                </a> and volunteer in the&nbsp;
                <a className="profile-link text-custom-yellow-300 font-bold" 
                href="https://sfumars.com/people/george-giovanis/"> 
                MARS Laboratory.</a>
              </p>
              <p className="mb-4">
                I love creating intuitive web and mobile applications. My 
                goal is to provide users with fast, enjoyable, and reliable
                software. To do this, I develop using modern 
                software-engineering methods.
              </p>
              <p className="mb-8">
                I am currently seeking a software engineering or full-stack
                developer co-op/internship.&nbsp;
                <a className="profile-link text-custom-red-500 font-bold"
                href="mailto:georgedgiovani.dev@gmail.com/"> 
                Let's get in touch.</a>
              </p>

            </div>
          </div>

          <div className="profile-pane-right">
            <SplitPaneImage 
              src={require("../media/me.jpg")}
              alt="Catch you next time!"
              outerCardStyle="profile-image-outer"
              imageStyle="profile-image"
            />
          </div>
      </div>
      
    </div>
  );
}

export default Profile;