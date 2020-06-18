import React from 'react';
import Banner from '../Banner.jsx'
import data from '../../content/contentDict.jsx'

function ProjectsBanner() {
  return (
    <Banner 
      bannerStyle="banner"
      header={
        <div className="banner-content">
          <p className="underline-small-projects">
            {data["Projects"]["banner"]}
          </p>
        </div>}
    />
  );
}

export default ProjectsBanner;