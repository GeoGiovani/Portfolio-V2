import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {CanvasSpace, Form, Line, Create, Group, Pt} from 'pts/dist/es5'

class ShootingStars extends PtsCanvas {

  start (bound, space) {
    this.pts = Create.distributeRandom( space.innerBound, 75 );
    this.nw = new Pt(0,0);
    this.ne = new Pt(space.width, 0);
    this.mouse = space.center;
    this.colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];
  }

  animate (time, ftime, space) {
    // make a line and turn it into an "op" (see the guide on Op for more)
    let perpend = new Group( this.nw, this.ne ).op( Line.perpendicularFromPt );
    this.pts.rotate2D( 0.0005, space.center );

    this.pts.forEach( (p, i) => {
      // for each point, find the perpendicular to the line
      let lp = perpend( p );
      var ratio = 0.3
      this.form.stroke(`rgba(255,255,255,${ratio}`, ratio*2).line( [ p, lp ] );
      this.form.fillOnly( this.colors[i%3] ).point( p, 1 );
    });
  }

  action (type, px, py, event) {
    if (type=="move") {
      this.mouse = [parseFloat(px),parseFloat(py)];
    }
  }
}

function SpaceCanvas(props) {
  return (
    <ShootingStars background="#000" />
  );
}

export default SpaceCanvas;