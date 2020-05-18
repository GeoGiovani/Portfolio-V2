import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt} from 'pts/dist/es5'

class ShootingStars extends PtsCanvas {

  start (bound, space) {
    this.pts = Create.distributeRandom( space.innerBound, 125 );
    this.nw = new Pt(0,0);
    this.ne = new Pt(space.width, 0);
    this.sw = new Pt(0, space.height);
    this.se = new Pt(space.width, space.height);
    this.mouse = space.center;
    this.colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];
  }

  animate (time, ftime, space) {
    // Generate a Line object along bottom axis
    let perpends = new Group( this.sw, this.se ).op( Line.perpendicularFromPt );
    // Rotate all points
    this.pts.rotate2D( 0.0003, space.center );
    // Draw perpendicular lines to each point
    this.pts.forEach( (p, i) => {
      let lp = perpends( p );
      var ratio = Math.min( 0.6, 1 - lp.$subtract(p).magnitude()/(space.size.x/2.25) );
      let fadeColors = ['rgba(255,63,142', 'rgba(4,194,201', 'rgba(46,85,193'];
      this.form.stroke(`${fadeColors[i%3]},${ratio})`, ratio*2).line( [ p, lp ] );
      this.form.fillOnly( this.colors[i%3] ).point( p, 1 );
    });
  }
}

function SpaceCanvas(props) {
  return (
    <ShootingStars background="#000" style={{height: '100%', width: '100%', position: 'absolute', top: 0, left: 0}}/>
  );
}

export default SpaceCanvas;