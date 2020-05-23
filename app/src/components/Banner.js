import React from 'react';

function Banner(props) {
  return (
    <div className={props.bannerStyle}>
      <div className={props.headerStyle}>
        {props.header}
      </div>
      <div className={props.footerStyle}>
        {props.footer}
      </div>
    </div>
  );
}

export default Banner;