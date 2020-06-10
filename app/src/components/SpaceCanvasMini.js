import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt} from 'pts'

class ShootingStarsMini extends PtsCanvas {

  start (bound, space) {
    this.center = space.center;
    this.nw = new Pt(0,0);
    this.ne = new Pt(space.width, 0);
    this.sw = new Pt(0, space.height);
    this.se = new Pt(space.width, space.height);
    this.lnColors = ["#ff3f8e", "#81e6d9", "#ffbb55"];
    this.numPts = Math.floor(15*space.size.x/space.size.y)
    this.pts = Create.distributeRandom(space.innerBound, this.numPts);
    this.perpends = new Group(this.sw, this.se).op(Line.perpendicularFromPt);
  }

  animate (time, ftime, space) {

    // Rotate all points
    this.pts.rotate2D(0.0002, this.center);

    // Draw perpendicular lines to each point
    this.pts.forEach( (p, i) => {
      let lp = this.perpends(p);
      this.form.stroke(this.lnColors[i%3], 1.5).line([p,lp]);
    });
  }
}

function SpaceCanvasMini(props) {
  return (
    <ShootingStarsMini background={props.bgColor} style={props.style}/>
  );
}

export default SpaceCanvasMini;