import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {Line, Create, Group, Pt, Bound} from 'pts'


class ShootingStars extends PtsCanvas {

  start (bound, space) {

    this.motionPref = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    );

    this.height   = space.height;
    this.width    = space.width;
    this.center   = space.center;
    this.pxlRatio = window.devicePixelRatio;

    this.unw = new Pt(0,0);
    this.use = new Pt(this.width, this.height/3);

    this.mnw = new Pt(0,this.height/3);
    this.mse = new Pt(this.width, 2*this.height/3);

    this.lnw = new Pt(0, 2*this.height/3);
    this.lse = new Pt(this.width, this.height)
    this.lsw = new Pt(0, this.height)

    this.upperBound  = new Bound(this.unw, this.use)
    this.middleBound = new Bound(this.mnw, this.mse)
    this.lowerBound  = new Bound(this.lnw, this.lse)

    this.numPts = 25;
    if (this.width > 1100) this.numPts = Math.floor((30*this.width/this.height));
    else if (this.width > 1000) this.numPts = 45;
    else if (this.width > 800) this.numPts  = 35;
    else if (this.width > 500) this.numPts  = 30;
    if (this.numPts > 80) this.numPts = 80;

    this.upperPts  = Create.distributeRandom(this.upperBound, this.numPts);
    this.middlePts = Create.distributeRandom(this.middleBound, Math.floor(this.numPts*1.5));
    this.lowerPts  = Create.distributeRandom(this.lowerBound, this.numPts);

    this.perpends = new Group (this.lsw, this.lse).op(Line.perpendicularFromPt);
    
    this.ptColors = ["#ff3f8e", "#81e6d9", "#ffbb55"];
    this.lnColors = ['rgba(255,63,156', 'rgba(129,230,217', 'rgba(255,181,85'];
  }

  animate(time, ftime, space) {

    // Rotate all points (disable if user prefers reduced motion)
    if (this.motionPref.matches) {
      this.upperPts.rotate2D(0.0003, this.center);
      this.middlePts.rotate2D(0.0003, this.center);
      this.lowerPts.rotate2D(0.0003, this.center);
    }

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

    // Draw the Pt
    this.form.fillOnly(this.ptColors[i%3]).point(p,1);

    // Calculate line opacity, return if line is too faint
    let gamma = 1 - ((this.height-p.y)/this.height*1.3);
    let ratio = Math.min(1, gamma);
    if(ratio < 0.05) return;

    // Draw the line; Ensure thickness is appropriate for users display
    var thickness = 1; 
    if(this.pxlRatio > 1) {
      (ratio*2.5 > .75) ? thickness = ratio*2.5 : thickness = .75;
    }
    else {
      (ratio*2.5 > 1.5) ? thickness = ratio*2.5 : thickness = 1.5;
    }
    this.form.stroke(`${this.lnColors[i%3]},${ratio})`, thickness).line([p,lp]);
  }
  
  // Override PtsCanvas' resize function, 
  // Resize only if window changes > 25 px in either domain
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


function SpaceCanvas(props) {
  return (
    <div className="space-hero-canvas">
      <ShootingStars 
        background="#121212"
        style={{
          height: '100vh',
          width: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default SpaceCanvas;
