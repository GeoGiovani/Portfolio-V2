import React from 'react'
import GitHubSVG from './SVGs/GitHubSVG.jsx'


function GitHubButton() {
  return (
    <li className="btn-github">
      <a href="https://github.com/GeoGiovani/" className="link-github"> 
        <GitHubSVG />
      </a>
    </li>
  );
}

export default GitHubButton;
