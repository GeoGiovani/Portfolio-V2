import React from 'react';
// import Profile from './assembled-components/Profile.js'
// import Projects from './assembled-components/Projects.js'
import NavBar from './assembled-components/NavBar.js'
import SpaceHero from './assembled-components/SpaceHero.js'
import SpaceProfile from './assembled-components/SpaceProfile.js'

function App() {
  return (
    <div>
      <SpaceHero />
      {/* <PoolBallHero /> */}
      {/* <MinimalistHero /> */}
      <NavBar />
      <SpaceProfile />
      {/* <Profile /> */}
      {/* <Projects /> */}
    </div>
  );
}

export default App; 