import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt, Bound} from 'pts'

class ShootingStars extends PtsCanvas {

  start (bound, space) {

    this.height = space.height;
    this.width = space.width;
    this.center = space.center;

    this.unw = new Pt(0,0);
    this.use = new Pt(this.width, this.height/3);

    this.mnw = new Pt(0,this.height/3);
    this.mse = new Pt(this.width, 2*this.height/3);

    this.lnw = new Pt(0, 2*this.height/3);
    this.lse = new Pt(this.width, this.height)
    this.lsw = new Pt(0, this.height)

    this.upperBound = new Bound(this.unw, this.use)
    this.middleBound = new Bound(this.mnw, this.mse)
    this.lowerBound = new Bound(this.lnw, this.lse)

    this.numPts = Math.floor((35*space.size.x/space.size.y))

    this.upperPts = Create.distributeRandom(this.upperBound, this.numPts);
    this.middlePts = Create.distributeRandom(this.middleBound, this.numPts);
    this.lowerPts = Create.distributeRandom(this.lowerBound, this.numPts);

    this.perpends = new Group (this.lsw, this.lse).op(Line.perpendicularFromPt);
    
    this.ptColors = ["#ff3f8e", "#81e6d9", "#ffbb55"];
    this.lnColors = ['rgba(255,63,156', 'rgba(129, 230, 217', 'rgba(255,181,85'];
  }
  
  animate (time, ftime, space) {

    // Rotate all points
    this.upperPts.rotate2D( 0.0003, this.center );
    this.middlePts.rotate2D( 0.0003, this.center );
    this.lowerPts.rotate2D( 0.0003, this.center );

    // Draw perpendicular lines to each point
    this.upperPts.forEach ( (p, i) => {
      let lp = this.perpends(p)
      this.drawLine(p, i, lp)
    });
    this.middlePts.forEach ( (p, i) => {
      let lp = this.perpends(p)
      this.drawLine(p, i, lp)
    });
    this.lowerPts.forEach ( (p, i) => {
      let lp = this.perpends(p)
      this.drawLine(p, i, lp)
    });
  }

  drawLine(p, i, lp) {
    var gamma = 1 - ((this.height-p.y)/this.height*1.3);
    var ratio = Math.min(1, gamma);

    // Ensure thickness > 0.5 to avoid resolution scaling bugs
    var thickness = 1; (ratio*2.5 > 1) ? thickness = ratio*2 : thickness = .75;
    this.form.stroke(`${this.lnColors[i%3]},${ratio})`, thickness).line([p,lp]);
    this.form.fillOnly( this.ptColors[i%3]).point( p, 1 );
  }
}

function SpaceCanvas(props) {
  return (
    <ShootingStars background={props.bgColor} style={props.style}/>
  );
}

export default SpaceCanvas;