import React from 'react';
import ProfilePicture from './ProfilePicture.jsx'
import ProfileText from './ProfileText.jsx'


function ProfileContent() {
  return (
    <div className="profile-content">

      <div className="profile-pane-left">
        <ProfileText />
      </div>

      <div className="profile-pane-right">
        <ProfilePicture />
      </div>
      
    </div>
  );
}

export default ProfileContent;
