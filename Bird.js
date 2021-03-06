//See more at BaseClass.js.
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    // Creates the smoke Image array.
    this.smokeImage = loadImage("smoke.png");
    //this.trajectory is a empty array.
    this.trajectory =[];
  }

  display() {
    super.display();
    //Creates the smoke.
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
