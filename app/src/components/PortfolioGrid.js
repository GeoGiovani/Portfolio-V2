import React from 'react';

function PortfolioGrid(props) {
  return(
    <div className={props.wrapperStyle}>
      {props.content}
    </div>
  );
}

export default PortfolioGrid;