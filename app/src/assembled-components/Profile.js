import React from 'react';
import Banner from '../components/Banner.js'
import SplitPaneImage from '../components/SplitPaneImage.js'
import LinkButton from '../components/LinkButton.js'
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
                based in Vancouver, BC. I currently study at&nbsp;
                <a className="profile-link text-custom-purple-400 font-bold" 
                href="https://www.sfu.ca/">Simon Fraser University
                </a> and volunteer in the <a className="profile-link text-custom-purple-400 font-bold" 
                href="https://sfumars.com/people/george-giovanis/"> 
                MARS Laboratory</a>.
              </p>
              <p className="mb-4">
                I love creating intuitive web and mobile applications. My 
                goal is to provide users with fast, enjoyable, and reliable
                software. To do this, I develop using proven 
                software-engineering methods.
              </p>

              <p className="mb-8">
                I am currently seeking a software engineering or full-stack
                developer co-op/internship.
              </p>

              <div className="mr-p5">
                <LinkButton
                  link="mailto:georgedgiovani.dev@gmail.com"
                  content="Contact Me"
                  buttonStyle="btn-contact"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="profile-image-wrapper">
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