import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Create} from 'pts/dist/es5'

class NightSky extends PtsCanvas {

  start (bound, space) {
    this.pts = Create.distributeRandom( space.innerBound, (25*space.size.x/space.size.y)  );
    this.colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];
  }

  animate (time, ftime, space) {
    // Rotate all points
    this.pts.rotate2D( 0.00005, space.center );
    this.pts.forEach( (p, i) => {
      this.form.fillOnly( this.colors[i%3] ).point( p, 1 );
    });
  }
}

function NightSkyCanvas(props) {
  return (
    <NightSky background={props.bgColor} style={props.style}/>
  );
}

export default NightSkyCanvas;