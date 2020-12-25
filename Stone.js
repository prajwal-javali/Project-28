class Stone {
    constructor(x, y, radius1, radius2) {
      var options = {
          isStatic: false,
          'restitution': 1,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, radius1, radius2, options);
      this.radius1 = radius1;
      this.radius2 = radius2;
      this.stone = loadImage("Sprites/stone.png");

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      pop();

      imageMode(CENTER);
      fill("yellow");
      image(this.stone, pos.x, pos.y, this.radius1, this.radius2);
    }
  } 