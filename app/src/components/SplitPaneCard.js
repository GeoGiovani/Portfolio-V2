import React from 'react';

function SplitPaneCard(props) {
  return(
    <div className={props.outerCardStyle}>
      <div className={props.innerCardStyle}>
        <div className={props.titleStyle}>{props.title}</div>
        <div className={props.contentStyle}>{props.content}</div>
      </div>
    </div>
  );
}

export default SplitPaneCard;