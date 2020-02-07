class Tower1 {
  constructor(x,y,width,height){
    this.visiblility = 255;
      var options = {
          'restitution':0,
          'friction':0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    var angle = this.body.angle;
    if(this.body.speed > 7){
      score = score + 5;
      Tower1.visible = false;
    }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    rectMode(CENTER);
    fill("grey");
    rect(0, 0, this.width, this.height);
    pop()
    
    fill("grey");
    strokeWeight(2);
   
  }
}