import React from 'react';


function Image(props) {
  return (
    <div className={props.imageWrapperStyle}>
      <img src={props.src} alt={props.alt} className={props.imageStyle}></img>
    </div>
  );
}

export default Image;
