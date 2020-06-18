import React from 'react';


function Banner(props) {
  return (
    <div className={props.bannerStyle}>
      {props.header}
    </div>
  );
}

export default Banner;
