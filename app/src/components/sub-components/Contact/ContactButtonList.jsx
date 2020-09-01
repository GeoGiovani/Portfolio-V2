import React from 'react';
import GitHubButton from './Buttons/GitHubButton.jsx'
import LinkedInButton from './Buttons/LinkedInButton.jsx'
import EmailButton from './Buttons/EmailButton.jsx'


function ContactButtonList() {
  return (
    <div className="contact-buttons-wrapper">
      <ul className="contact-buttons">
        <GitHubButton />
        <LinkedInButton />
        <EmailButton />
      </ul>
    </div>
  );
}

export default ContactButtonList;
