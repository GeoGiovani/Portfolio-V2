import React from 'react';
import ExampleSplitPane from './assembled-components/ExampleSplitPane.js'
import MinimalistHero from './assembled-components/MinimalistHero.js'
import AboutMePanel from './assembled-components/AboutMePanel.js'

function App() {
  return (
    <div>
      <MinimalistHero />
      <AboutMePanel />
      <ExampleSplitPane />
    </div>
  );
}

export default App; 