import React from 'react';

function Banner(props) {
  return (
    <div className={props.bannerStyle}>
      <div className={props.headerStyle}>
        {props.header}
      </div>
      <div className={props.foorerStyle}>
        {props.footer}
      </div>
    </div>
  );
}

export default Banner;