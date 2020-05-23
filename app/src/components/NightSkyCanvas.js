import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Create} from 'pts/dist/es5'

class NightSky extends PtsCanvas {

  start (bound, space) {
    this.pts = Create.distributeRandom( space.innerBound, (10*space.size.x/space.size.y)  );
    this.colors = ["#121212", "#121212", "#121212"];
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