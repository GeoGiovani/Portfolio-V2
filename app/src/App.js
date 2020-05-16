import React from 'react';
import MinimalistHero from './assembled-components/MinimalistHero.js'
import Profile from './assembled-components/Profile.js'
import Projects from './assembled-components/Projects.js'
import NavBar from './assembled-components/NavBar.js'

function App() {
  return (
    <div>
      <MinimalistHero />
      <NavBar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App; 