/*
prototype allows to add new methods and properties to a constructor function
We can use prototype to add new methods to arrays and objects
*/

function Ball(radius,color){
    this.radius=radius;
    this.color=color;
    this.summary=function(){
        return `Iam a ball of radius ${this.radius} and color ${this.color}`
    }
}
Ball.prototype.area=function(){
    return Math.PI*this.radius*this.radius
}
let b=new Ball(20,'red')

console.log(b) //the area method does not exists in b, its in the prototype
console.log(b.area())

//adding a new method to Array

Array.prototype.findlarge=function(){
    let large=this[0]
    for(let i=1;i<this.length;i++){
        if(this[i]>large){
            large=this[i]
        }
    }
    return large
}

let a=[1,2,4,66,777]
console.log(a.findlarge())
