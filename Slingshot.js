class SlingShot{
    //Creates a chain-like constructor.
    constructor(bodyA, pointB){
        //Declares the options.
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Loads the image for each part.
        this.sling1 = loadImage('sling1.png');
        this.sling2 = loadImage('sling2.png');
        this.sling3 = loadImage('sling3.png');
        //Sets the variable. 
        this.pointB = pointB;
        //Creates the constraint.
        this.sling = Constraint.create(options);
        //Adds the constraint to the world.
        World.add(world, this.sling);
    }
    //Attaches an object to the constraint point. 
    attach(body){
        this.sling.bodyA = body;
    }
    //Releases the object from constraint by removing attachment point. 
    fly(){
        this.sling.bodyA = null;
    }
    //The display function.
    display(){
        //Sets the position of the image for constraint. 
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //Condition for setting up constraint.
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //Does the push() function. Learn more about the push() and pop() functions at https://p5js.org/reference/#/p5/push and at https://p5js.org/reference/#/p5/pop.
            push();

            stroke(48,22,8);
            //If the x value of pointA is greater than 200, the first line is located at this area and so is the second line.
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            //Otherwise, the first and second line is at this area.
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            //Does the pop() function. Learn more about the push() and pop() functions at https://p5js.org/reference/#/p5/push and at https://p5js.org/reference/#/p5/pop.
            pop();
        }
    }
    
}
