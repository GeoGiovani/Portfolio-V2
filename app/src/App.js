import React from 'react';
import MinimalistHero from './assembled-components/MinimalistHero.js'
import AboutMePanel from './assembled-components/AboutMePanel.js'
import ExperiencesSection from './assembled-components/ExperiencesSection.js'

function App() {
  return (
    <div>
      <MinimalistHero />
      <AboutMePanel />
      <ExperiencesSection />
    </div>
  );
}

export default App; 