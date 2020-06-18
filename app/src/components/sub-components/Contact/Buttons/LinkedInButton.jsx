import React from 'react'
import LinkedInSVG from './SVGs/LinkedInSVG.jsx'


function LinkedInButton() {
  return (
    <li className="btn-linkedIn">
      <a href="https://ca.linkedin.com/in/george-giovanis/" className="link-linkedIn">
        <LinkedInSVG />
      </a>
    </li>
  );
}

export default LinkedInButton;
