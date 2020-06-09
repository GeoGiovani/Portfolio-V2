import React from 'react';
import Profile from './assembled-components/Profile.js'
import Projects from './assembled-components/Projects.js'
import NavBar from './assembled-components/NavBar.js'
import SpaceHero from './assembled-components/SpaceHero.js'

function App() {
  return (
    <div className="h-screen w-screen">
      <SpaceHero />
      <NavBar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App; 