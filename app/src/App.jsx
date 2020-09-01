import React from 'react';
import Hero from './components/assembled-components/Hero.jsx'
import NavBar from './components/assembled-components/NavBar.jsx'
import Profile from './components/assembled-components/Profile.jsx'
import Projects from './components/assembled-components/Projects.jsx'
import Contact from './components/assembled-components/Contact.jsx'


function App() {
  return (
    <div id="content">
      <Hero />
      <NavBar />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App; 
