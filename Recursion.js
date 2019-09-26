/*
recursive function
 a function which is called again and again untill the result is found
*/
function findsum(num,sum=0){
    if(num>0){
        sum+=num
        return findsum(num-1,sum)
    }
    return sum
}

console.log(findsum(1000))