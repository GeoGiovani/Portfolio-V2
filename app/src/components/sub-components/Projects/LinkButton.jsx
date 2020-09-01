import React from 'react';


function LinkButton(props) {
  return(
    <a className={props.buttonStyle} href={props.link}>
      {props.content}
    </a>
  );
}

export default LinkButton;
