import React from 'react';
import SplitPane from './components/SplitPane.js'
import SplitPaneCard from './components/SplitPaneCard.js'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


function App() {
  return (
    <SplitPane 
      left={
        <SplitPaneCard
          title="Left Pane Title"
          content={lorem}
          
          outerCardStyle="box-border w-96 h-96 flex items-center"
          titleStyle="box-border w-96 h-16 text-3xl text-customBeige-200"
          contentStyle="box-border w-96 text-customBeige-200 font-thin"
        />
      }
      right={
        <SplitPaneCard
          title="Right Pane Title"
          content={lorem}
          
          outerCardStyle="box-border w-96 h-96 flex items-center text-right"
          titleStyle="box-border w-96 h-16 text-3xl text-customBeige-200"
          contentStyle="box-border w-96 text-customBeige-200 font-thin"
        />
      }

      paneWrapper="flex items-stretch h-128 w-screen"
      paneLeft="flex-1 flex items-center justify-end bg-customGrey-900 p-8"
      paneRight="flex-1 flex items-center bg-customGrey-900 p-8"
    />
  );
}

export default App; 