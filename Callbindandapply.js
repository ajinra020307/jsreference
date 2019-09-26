/*
call--call accepts this as the first parameter and proceedeed by other parameters
apply--apply accepts this as the first parameter and proceedeed by other parameters in        an array
bind--bind returns a new function with a this value binded to the function
*/

function fun(num,num2){
    console.log(this)
    console.log(num)
    console.log(num2)
}
fun(22,22) //returns globalthis and num

//call changes the this value to an object
fun.call({aa:'fd'},22,22)  
//apply is same as call but parameters are passed in array
fun.apply({aa:'fd'},[22,22]) 
//bind returns a new function with a new this value
fun=fun.bind({aa:'fd'})
fun(22,22)
