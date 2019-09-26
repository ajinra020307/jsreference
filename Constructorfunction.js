/*
c
*/

function Ball(radius,colour){
    this.radius=radius;
    this.colour=colour;
    this.area=function(){
        return Math.PI * this.radius*this.radius
    }
}

let b1=new Ball(20,'red')
let b2=new Ball(20,'blue')
console.log(b2)
console.log(b2.area())