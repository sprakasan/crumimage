class Paper {
	constructor(x,y,radius) {
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
            density:1.2
        }

		this.body=Bodies.circle(x,y, radius, options);
		this.image=loadImage("paperdustbin/paper.png")
		this.radius = 70;
		World.add(world, this.body);

    }
    
	display() {
			var pos=this.body.position;		 

			push()
			translate(pos.x, pos.y);
			noStroke();
			fill("pink")
	imageMode(CENTER)
			image(this.image,0,0,40,40);
			pop()
			
	}

}