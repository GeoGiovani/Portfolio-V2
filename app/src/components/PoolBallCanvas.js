import React from 'react'
import {PtsCanvas} from 'react-pts-canvas'
import {World, Particle, Num, Create, Pt} from 'pts/dist/es5'

class PoolBalls extends PtsCanvas {

  start (bound, space) { 
    // Create world and some random points
    this.world = new World( this.space.innerBound, .995, 0 );
    this.pts = Create.distributeRandom( this.space.innerBound, 15 );
    
    // Create particles and hit them with a random impulse
    for (let i=0, len=this.pts.length; i<len; i++) {
      let p = new Particle( this.pts[i] ).size( (i===0) ? 50 : 3+Math.random()*space.size.x/20 );
      p.hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
      this.world.add( p );
    }

    this.world.particle( 0 ).lock = true; // lock it to move it by pointer later on
  }

  animate (time, ftime, space) { 
    this.world.drawParticles( (p, i) => {
      let color = (i===0) ? "#343233" : ["#ff2d5d", "#42dc8e", "#2e43eb", "#ffe359"][i%4];
      this.form.fillOnly( color ).point( p, p.radius, "circle" ) 
    });

    this.world.update( ftime );
  }

  action (type, px, py, event) { 
    if (type == "move") {
      this.world.particle( 0 ).position = new Pt(px, py);
    }
  }

  resize (size, event) { 
    if (this.world) this.world.bound = this.space.innerBound;
  }
}

function PoolBallCanvas(props) {
  return (
    <PoolBalls background={props.bgColor} style={props.style}/>
  );
}

export default PoolBallCanvas;