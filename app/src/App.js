import React from 'react';
import SpaceHero from './assembled-components/SpaceHero.js'
import NavBar from './assembled-components/NavBar.js'
import Profile from './assembled-components/Profile.js'
import Projects from './assembled-components/Projects.js'

function App() {
  return (
    <div>
      <SpaceHero />
      <NavBar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App; 