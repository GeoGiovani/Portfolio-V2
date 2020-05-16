import React from 'react';
import SplitPane from '../components/SplitPane.js'
// import SplitPaneCard from '../components/SplitPaneCard.js'
// import SplitPaneImage from '../components/SplitPaneImage.js'
import Banner from '../components/Banner.js'
import '../styles/index.css';

function ExperiencesSection(props) {
  return (
    <div>
      <Banner 
        header="Projects"
        bannerStyle="banner bg-white"
        headerStyle="banner-header text-custom-grey-900 border-custom-grey-900 border-opacity-50"
      />
      <SplitPane 
        left={
          <div></div>
        }
        right={
          <div></div>
        }
        paneStyle="pane bg-white pb-12"
        paneTitleStyle="flex justify-center font-serif"
        leftPaneStyle="pane-left"
        rightPaneStyle="pane-right"
      />
    </div>
  );
}

export default ExperiencesSection;