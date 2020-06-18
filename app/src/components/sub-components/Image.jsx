import React from 'react';

function Image(props) {
  return (
    <div className={props.outerCardStyle}>
      <div className={props.innerCardStyle}>
        <img src={props.src} alt={props.alt} className={props.imageStyle}></img>
        <div className={props.imageFooterStyle}>{props.imageFooter}</div>
      </div>
    </div>
  );
}

export default Image;