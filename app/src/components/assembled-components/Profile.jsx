import React from 'react';
import ProfileBanner from '../sub-components/Profile/ProfileBanner.jsx'
import ProfileContent from '../sub-components/Profile/ProfileContent.jsx'


function Profile() {
  return (
    <div id="Profile" className="profile-page">
      <ProfileBanner />
      <ProfileContent />      
    </div>
  );
}

export default Profile;