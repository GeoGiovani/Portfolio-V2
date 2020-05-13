import React from 'react';
import SplitPane from './components/SplitPane.js'
import SplitPaneCard from './components/SplitPaneCard.js'
import './styles/index.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


function App() {
  return (
    <SplitPane 
      left={
        <SplitPaneCard
          title="Left Pane Title"
          content={lorem}
          
          outerCardStyle="cardWrapper w-96 h-96 text-customBeige-200"
          titleStyle="cardTitle w-96 h-16 text-3xl"
          contentStyle="cardContent w-96"
        />
      }
      right={
        <SplitPaneCard
          title="Right Pane Title"
          content={lorem}
          
          outerCardStyle="cardWrapper w-96 h-96 text-right text-customBeige-200"
          titleStyle="cardTitle w-96 h-16 text-3xl"
          contentStyle="cardContent w-96"
        />
      }

      paneWrapper="paneWrapper bg-customGrey-900"
      paneLeft="paneLeft"
      paneRight="paneRight"
    />
  );
}

export default App; 