import React from 'react';

function Hero(props) {
  return (
    <div className={props.heroStyle}>
      <div className={props.heroContentStyle}>
        <div className={props.headerStyle}>{props.header}</div>
        <div className={props.footerStyle}>{props.footer}</div>
      </div>
    </div>
  );
}

export default Hero;