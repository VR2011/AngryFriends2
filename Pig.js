//See more at BaseClass.js.
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("enemy.png");
    //The pig is fully visible.
    this.Visiblity = 255;
  }

 display(){
   //if the body speed is more than 3, the normal display() will happen.
   if(this.body.speed < 3){
    super.display();
   }
   //Otherwise, the pig is gone.
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
  //The score increases.
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};
