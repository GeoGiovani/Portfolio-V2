import React from 'react';

function SplitPane(props) {
  return (
    <div className={props.paneStyle}>
      <div className={props.leftPaneStyle}>
        {props.left}
      </div>
      <div className={props.rightPaneStyle}>
        {props.right}
      </div>
    </div>
  );
}

export default SplitPane;