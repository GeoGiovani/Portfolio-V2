import React from 'react';

function SplitPane(props) {
    return (
        <div className={props.paneWrapper}>
            <div className={props.paneLeft}>
                {props.left}
            </div>
            <div className={props.paneRight}>
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane;