class Point3{

    // Private Access modifiers
    // default Access modifiers is public.
        constructor(private x?:number,private y?:number){ // ? is for  Optional Parameters.
        }
    
        draw(){
            console.log('X is :'+this.x+' Y is:'+this.y);
        }

        setX(value){     //set method for  x value.
            if(value<0)
                throw new Error("value Should not Lessthan 0.")

            this.x=value;
        }
        getX(){   // Get value for x. 
            return this.x;
        }
    
    }
    
    let point3=new Point3(1,2);
    console.log(point3.getX());
    point3.setX(20);
    point3.draw();