class Point2{

// Private Access modifiers
// default Access modifiers is public.
    constructor(private x?:number,private y?:number){ // ? is for  Optional Parameters.
    }

    draw(){
        console.log('X is :'+this.x+' Y is:'+this.y);
    }

}

let point2=new Point2(1,2);

point2.draw();