class Paper{
    constructor(x,y,r){
var options={
    'frictionAir':0.001,
    'restitution':0.2,
    'density':1.0,
    'isStatic':false
}
    this.body=Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);    
    }
    display(){
        var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill(255,0,255);
    ellipse(0, 0, this.r, this.r);
    pop();
    }
}
        

    


