import React from 'react';
import Image from '../Image.jsx'
import data from '../../content/contentDict.jsx'


function ProfilePicture() {
  return (
    <Image 
      src={data["Profile"]["pic-link"]}
      alt={data["Profile"]["pic-alt"]}
      imageWrapperStyle="profile-image-outer"
      imageStyle="profile-image"
    />
  );
}

export default ProfilePicture;
