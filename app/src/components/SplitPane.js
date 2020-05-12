import React from 'react';

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-Left">
                {props.left}
            </div>
            <div className="SplitPane-Right">
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane;