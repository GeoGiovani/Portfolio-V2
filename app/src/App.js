import React from 'react';
import SplitPane from './components/SplitPane.js'
import './App.css';

function App() {
  return (
    <SplitPane 
      left={<p class="text-indigo-500">LeftPane</p>}
      right={<p class="text-orange-500">RightPane</p>}
    />
  );
}

export default App;