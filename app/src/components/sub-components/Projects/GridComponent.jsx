import React from 'react';

function GridComponent(props) {
  return (
    <div className={props.wrapperStyle}>
      {props.content}
    </div>
  );
}

export default GridComponent;