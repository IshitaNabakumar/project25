class Bucket extends BaseClass {
  constructor(x, y,width, height) {
    var options = {
      isStatic: true
  }

   super(x, y, 50, 50,options);
   
    this.image=loadImage("dustbingreen.png")
    
    World.add(world, this.body);
    
  }
  display(){
    var pos = this.body.position;
    
   super.display();
  };
};



