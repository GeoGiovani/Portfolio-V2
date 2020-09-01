import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt} from 'pts'


class ShootingStarsMini extends PtsCanvas {

  start (bound, space) {
    this.motionPref = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    );
    this.height = space.height;
    this.width = space.width;
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

    // Rotate all points (disable if user prefers reduced motion)
    if (this.motionPref.matches) {
      this.pts.rotate2D(0.0002, this.center);
    }

    // Draw perpendicular lines to each point
    this.pts.forEach( (p, i) => {
      let lp = this.perpends(p);
      this.form.stroke(this.lnColors[i%3], 1.5).line([p,lp]);
    });
  }

  resize(size, evt) {
    if (this.form.ready) {
      if(Math.abs(this.height-this.space.height) > 25  
      || Math.abs(this.width-this.space.width) > 25 ) {

        this.space.clear();
        this.start(this.bound, this.space);
      }
    }
  }
}


function SpaceCanvasMini(props) {
  return (
    <ShootingStarsMini 
      background="#0c0c0c" 
      style={{height: '100%', width: '101%'}}
    />
  );
}

export default SpaceCanvasMini;
