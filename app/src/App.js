import React from 'react';
import SplitPane from './components/SplitPane.js'
import SplitPaneCard from './components/SplitPaneCard.js'
import LinkButton from './components/LinkButton.js'
import './styles/index.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."


function App() {
  return (
    <SplitPane 
      left={
        <SplitPaneCard
          title="Left Pane Title"
          content={
            <div>
              <p>{lorem}</p>
              <div className="card-spacer"></div>
              <LinkButton
                content="Left Button"
                buttonStyle="btn btn-teal btn-teal:hover"
                link=""
              /> 
            </div> 
          }
          outerCardStyle="card text-custom-beige-200"
          titleStyle="card-title"
          contentStyle="card-content"
        />
      }
      right={
        <SplitPaneCard
          title="Right Pane Title"
          content={            
            <div>
              <p>{lorem}</p>
              <div className="card-spacer"></div>
              <LinkButton
                content="Right Button"
                buttonStyle="btn btn-teal btn-teal:hover"
                link=""
              /> 
            </div> 
          }
          outerCardStyle="card text-right text-custom-beige-200"
          titleStyle="card-title"
          contentStyle="card-content"
        />
      }

      paneWrapper="pane bg-custom-grey-800"
      paneLeft="pane-left"
      paneRight="pane-right"
    />
  );
}

export default App; 