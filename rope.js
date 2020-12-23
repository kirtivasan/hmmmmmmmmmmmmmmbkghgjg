class rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var games={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:200,
            stiffness:1.9
        }

        this.rope=Constraint.create(games);
        World.add(world,this.rope);
      
    }
    display()
    {
        push();
        fill(84,39,15);
        stroke(84,39,15);
            strokeWeight(10);
            line(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y);
            line();
            pop();
    }
}