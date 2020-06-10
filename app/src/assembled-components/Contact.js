import React from 'react';

function Contact() {
  return (
    <div id="Contact" className="flex justify-center w-full h-22 pb-20 bg-custom-black-800">
      <div className="flex justify-center w-p40">

        <ul className="buttons-row flex w-p80 justify-center justify-between items-center text-gray-300">

          {/* Github */}
          <li className="btn-github">
            <a href="https://github.com/GeoGiovani/" className="link-github">
              <svg className="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z" fill-rule="evenodd" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>

          {/* LinkedIn */}
          <li className="btn-linkedIn">
            <a href="https://ca.linkedin.com/in/george-giovanis/" className="link-linkedIn">
              <svg className="icon" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.071 27.101v-.077a2.031 2.031 0 01-.05.077h.05z"/>
                <path d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z"/>
              </svg>
            </a>    
          </li>

          {/* Email */}
          <li className="btn-email">
            <a href="mailto:georgedgiovani.dev@gmail.com/" className="link-contact">
              <svg className="icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0C11.193 0 0 11.193 0 25s11.193 25 25 25 25-11.193 25-25S38.807 0 25 0zm0 3C12.85 3 3 12.85 3 25s9.85 22 22 22 22-9.85 22-22S37.15 3 25 3zm12 28.965V17l-8.737 8.464 8.737 6.5zm-24 0l8.737-6.502L13 17v14.965zm9.914-5.36L13 33h24l-9.914-6.395L25 28.625l-2.086-2.02zM13.72 17L25 26.058 36.28 17H13.72zm0 0" fill-rule="evenodd"/>
              </svg>
            </a>  
          </li>

        </ul>

      </div>
    </div>
  );
}

export default Contact;