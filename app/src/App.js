import React from 'react';
import SplitPane from './components/SplitPane.js'


function App() {
  return (
    <SplitPane 
      left={
        <div class="box-border w-full">
          <p class="box-border w-1/2 float-right text-right">
            Left Pane
          </p>
        </div>
      }
      right={
        <div class="box-border w-full">
          <p class="box-border w-1/2 float-left text-left">
            Right Pane
          </p>
        </div>
      }
      paneWrapper="flex items-stretch h-128 w-screen"
      paneLeft="flex-1 flex items-center bg-indigo-800 p-6"
      paneRight="flex-1 flex items-center bg-indigo-500 p-6"
    />
  );
}

export default App; 