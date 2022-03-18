import React from 'react';
import data from '../../content/contentDict.jsx'


function ProfileText() {
  return (
    <div className="profile-text">

      <p className="mb-4">
        {data["Profile"]["paragraph-1"]}&nbsp;
        <a className="profile-link text-custom-yellow-300 font-bold" 
        href={data["Profile"]["link-1"]}>{data["Profile"]["link-1-text"]}</a> 
      </p>

      <p className="mb-4">
        {data["Profile"]["paragraph-2-1"]}&nbsp;
        <a className="profile-link text-custom-teal-400 font-bold"
        href={data["Profile"]["link-2"]}>{data["Profile"]["link-2-text"]}</a>
        &nbsp;{data["Profile"]["paragraph-2-2"]}&nbsp;
        <a className="profile-link text-custom-green-400 text-opacity-95 font-bold" 
        href={data["Profile"]["link-3"]}>{data["Profile"]["link-3-text"]}</a>
      </p>

      <p className="mb-4 font-bold">
        {data["Profile"]["paragraph-3"]}
      </p>
      
    </div>
  );
}

export default ProfileText;
