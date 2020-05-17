import React from 'react';
import Hero from '../components/Hero.js'
import '../styles/index.css';

function MinimalistHero() {
  return (
    <div id="Hero">
      <Hero
        header="George Giovanis"
        footer="Full Stack Developer"
        heroStyle="hero bg-custom-grey-800 bg-fixed bg-hero-church-on-sunday-custom-grey-900"
        headerStyle="hero-title text-custom-beige-200 border-custom-beige-200 border-opacity-50"
        footerStyle="hero-footer text-custom-beige-200"
      />
    </div>
  );
}

export default MinimalistHero;