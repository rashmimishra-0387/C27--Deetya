class Stone{
    constructor(x, y, r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.stone = loadImage("Images/stone.png");
        this.radius = r;
    }
    display(){
        imageMode(CENTER);
        image(this.stone, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}