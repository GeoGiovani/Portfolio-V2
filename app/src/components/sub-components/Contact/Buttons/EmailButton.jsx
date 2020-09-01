import React from 'react'
import EmailSVG from './SVGs/EmailSVG.jsx'


function EmailButton() {
  return (
    <li className="btn-email">
      <a href="mailto:georgedgiovani.dev@gmail.com/" className="link-contact">
        <EmailSVG />
      </a>
    </li>
  );
}

export default EmailButton;
