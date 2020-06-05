import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt} from 'pts/dist/es5'

class ShootingStars extends PtsCanvas {

  start (bound, space) {
    this.pts = Create.distributeRandom( space.innerBound, (105*space.size.x/space.size.y)  );
    this.nw = new Pt(0,0);
    this.ne = new Pt(space.width, 0);
    this.sw = new Pt(0, space.height);
    this.se = new Pt(space.width, space.height);
    this.mouse = space.center;
    this.colors = ["#FF3F8E", "#04C2C9", "#fb5"];
  }

  animate (time, ftime, space) {
    // Generate a Line object along bottom axis
    let perpends = new Group( this.sw, this.se ).op( Line.perpendicularFromPt );
    // Rotate all points
    this.pts.rotate2D( 0.0003, space.center );
    // Draw perpendicular lines to each point
    this.pts.forEach( (p, i) => {
      let lp = perpends( p );
      var ratio = Math.min( .7, 1 - lp.$subtract(p).magnitude()/(space.size.x/(space.size.x/space.size.y*1.3)));

      // Ensure thickness > 0.5 to avoid resolution scaling bugs
      var thickness = 1; (ratio*2.5 > 1) ? thickness = ratio*2.5 : thickness = .75;
      let fadeColors = ['rgba(255,63,142', 'rgba(4,194,201', 'rgba(255,187,85'];
      this.form.stroke(`${fadeColors[i%3]},${ratio})`, thickness).line( [ p, lp ] );
      this.form.fillOnly( this.colors[i%3] ).point( p, 1 );
    });
  }
}

function SpaceCanvas(props) {
  return (
    <ShootingStars background={props.bgColor} style={props.style}/>
  );
}

export default SpaceCanvas;