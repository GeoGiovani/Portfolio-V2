import React from 'react';
import PoolBallCanvas from '../components/PoolBallCanvas.js'

function PoolBallHero() {
  return (
    <div id="Hero">
      <div className="box-border h-screen w-screen">
        <PoolBallCanvas 
          bgColor="#343233" 
          style={{height: '100%', width: '100%', position: 'absolute'}}/
        >
      </div>
      <div className="pool-hero pointer-events-none flex items-end justify-start">
        <div className="text-6xl text-gray-200 tracking-wide pointer-events-none">
          George Giovanis
        </div>
      </div>
    </div>
  );
}

export default PoolBallHero;