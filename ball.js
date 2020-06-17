class Ball {
  constructor(x,y){
    var options={
      'restitution':0.8,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.circle(x, y,20, options);
    this.width = 20;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    fill(0,230,0);
    ellipse(pos.x, pos.y,40);
    pop();
  }

     
}
    