import React from 'react';
import SpaceHero from './assembled-components/SpaceHero.js'
import NavBar from './assembled-components/NavBar.js'
import Profile from './assembled-components/Profile.js'
import Projects from './assembled-components/Projects.js'
import Contact from './assembled-components/Contact.js'

function App() {
  return (
    <div>
      <SpaceHero />
      <NavBar />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App; 