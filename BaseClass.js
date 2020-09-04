// Starts a class
class BaseClass{
  //Create a constructor
    constructor(x, y, width, height, angle) {
      //The options
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //Defines the body, width, height, and image.
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        //Adds the body to the world.
        World.add(world, this.body);
      }
      //Creates the display function
      display(){
        //Define the angle
        var angle = this.body.angle;
        //Does the push() function. Learn more about the push() and pop() functions at https://p5js.org/reference/#/p5/push and at https://p5js.org/reference/#/p5/pop.
        push();
        //Translates the positions.
        translate(this.body.position.x, this.body.position.y);
        //Rotate
        rotate(angle);
        //The image mode is at the center.
        imageMode(CENTER);
        //Sets the image postition
        image(this.image, 0, 0, this.width, this.height);
         //Does the pop() function. Learn more about the push() and pop() functions at https://p5js.org/reference/#/p5/push and at https://p5js.org/reference/#/p5/pop.
        pop();
      }
}
