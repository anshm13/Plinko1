class Particle {
    constructor(x,y,radius) {
      var options = {
          restitution: 0,
          isStatic: false
      };
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y, this.radius*2);
    }
}