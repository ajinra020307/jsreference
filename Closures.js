/*
closure is a function inside a function 
the closure function can access all the variables that the parent function can access
*/

function findsumandsub(num1,num2){
    
    function findsub(){
        return num1-num2
    }
    return `add value=${num1+num2} and sub value=${findsub()}`
}

console.log(findsumandsub(1,2))