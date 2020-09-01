import React from 'react';
import Banner from '../Banner.jsx'
import data from '../../content/contentDict.jsx'


function ProfileBanner() {
  return (
    <Banner 
      bannerStyle="banner"
      header={
        <div className="banner-content">
          <p className="underline-small">
            {data["Profile"]["banner"]}
          </p>
        </div>}
    />
  );
}

export default ProfileBanner;
