class DustBin{
    constructor(x,y){
this.x=x;
this.y=y;
this.dbwidth=200;
this.dbheight=100;
this.dbthickness=20;
this.angle=0;

    this.body=Bodies.rectangle(this.x,this.y,this.dbwidth,this.dbthickness,{isStatic:true});
    this.bodya=Bodies.rectangle(this.x-this.dbwidth/2,this.y-this.dbheight/2,this.dbthickness,this.dbheight,{isStatic:true});
    this.bodyb=Bodies.rectangle(this.x+this.dbwidth/2,this.y-this.dbheight/2,this.dbthickness,this.dbheight,{isStatic:true});
    
        Matter.Body.setAngle(this.bodyb,-1*this.angle);

        World.add(world, this.bodya); 
        World.add(world, this.bodyb); 
        World.add(world, this.body);    
    }
    display(){
        var pos =this.body.position;
        var posa =this.bodya.position;
        var posb =this.bodyb.position;

    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0, 0, this.dbwidth, this.dbthickness);
    pop();

    push();
    translate(posa.x, posa.y);
    rotate(this.angle);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0, 0, this.dbthickness,this.dbheight);
    pop();

    push();
    translate(posb.x, posb.y);
    rotate(-1*this.angle);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0, 0,  this.dbthickness,this.dbheight);
    pop();
    }
}