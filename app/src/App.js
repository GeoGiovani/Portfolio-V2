import React from 'react';
// import MinimalistHero from './assembled-components/MinimalistHero.js'
import Profile from './assembled-components/Profile.js'
import Projects from './assembled-components/Projects.js'
import NavBar from './assembled-components/NavBar.js'
// import PoolBallHero from './assembled-components/PoolBallHero.js'
import SpaceHero from './assembled-components/SpaceHero.js'

function App() {
  return (
    <div>
      <SpaceHero />
      {/* <PoolBallHero /> */}
      {/* <MinimalistHero /> */}
      <NavBar />
      <Profile />
      <Projects />

    </div>
  );
}

export default App; 