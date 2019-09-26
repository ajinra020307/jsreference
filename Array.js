/*
 Array methods and properties

1.Concat()
concat method joins two or more array and returns a new array
syntax--Array1.concat(array2,array3,......)  --return a new array
*/
//
//let a1 = [1, 2, 3]
//let a2 = [4, 5, 6]
//let a3 = [7, 8, 9]
//
//let concatedarray = a1.concat(a2, a3)
//console.log(concatedarray) //returns [1,2,3,4,5,6,7,8,9]

/*
2.copyWithin()
copywithin method allows to copy a number of elements to another position in the array 
syntax--array.copyWithin(noofelementstocopy,startindex,endindex) 
*/
//
//let a4 = [1, 2, 3, 4] 
//a4.copyWithin(2, 1, 3)
//console.log(a4) //returns [1,2,2,3]

/*
3.entries()
entries returns an array iterater object with key value pairs of index and element
which can be then looped
*/
//
//let a5=[1,2,3]
//let entry=a5.entries()
//
//for(let value of entry){
//    console.log(value) //return [0,1],[1,2],[2,3]
//}

/*
//4.every()
//every checks all the elements of an array with a condition and returns true if all elements passed inthe condition
//*/
//let a6=[1,2,0,4,4]
//let result=a6.every(v=>{if(v<5){return true}})
//console.log(result)//returns false

/*
//5.fill()
//fill fills an array with a static value
//array.fill('value',startindex,howmanyelementstofill)
//*/
//let a7=[1,2,3,4]
//let a8=a7.fill('hello',0,2)
//console.log(a8)
//
///*
//6.filter()
//filter filters an array based on a condition and returns a new array
//array.filter((v,i)=>{})
//*/
//
//let a9=[1,2,3,4,5,6,6]
//let a10=a9.filter((v,i)=>v>=5)
//
//console.log(a10)
//
///*
//7.find()
//returns undefined/value of one element which satisfies a condition
//array.find((v,i)=>{})
//*/
//
//let a11=[1,2,3,4]
//let findvalue=a11.find(v=>v===4)
//console.log(findvalue)
//
///*
//findindex()
//The findIndex() method returns the index of the first element in an array that pass a test
//array.findindex((v,i)=>{})
//*/
//let a12=[1,2,3,5]
//let index=a12.findIndex((v,i)=>v===2)
//console.log(index) //returns 1
//
///*
//foreach()
//the foreach() method runs a piece of code aganist all the elements of an array
//array.forEach((v,i)=>{})
//*/
//
//let a13=[1,2,3,4]
//a13.forEach((v,i)=>console.log(v))
//
//
///*
//push()
//push method allows to push a new value to the end an array 
//array.push(value)
//*/
//let a14=[1,2,3,4]
//a14.push('hello')
//console.log(a14)
///*
//pop()
//pop method removes the last element of an array
//array.pop()
//*/
//let a15=[1,2,3,4,5]
//let popped=a15.pop()
//console.log(popped)  //returns 5
//
///*
//from()
//array from method returns an array from a string object or a set
//Array.from('string'/object/set)
//*/
//let s1='hello'
//let a16=Array.from(s1)
//console.log(a16) //['h','e','l','l','o']
//
///*
//includes()
//the includes method finds whether an element is in an array and returns true/false 
//array.includes('value')
//*/
//let a17=[1,2,4,5]
//console.log(a17.includes(4))  //true
//
///*
//indexOF()
//the indexof method returns the index no of an array element or -1 if element is not in array
//array.indexOF(value,startindextosearch)
//*/
//
//let a18=[1,23,4,5,6]
//console.log(a18.indexOf(23,0)) //1
//
///*
//isArray()
//isarray method will checks the type of variable and returns true if its an array
//Array.isArray('array')
//*/
//let a19=[1,2,3,4]
//console.log(Array.isArray(a19)) //true
//
///*
//join()
//join method converts an array to string
//array.join()
//*/
//let a20=[1,2,3]
//console.log(a20.join()) //1,2,3,
//
///*
//keys()
//The keys() method returns an Array Iterator object with the indexes of an array.
//array.keys()
//*/
//let a21=[1,2,3,4,5]
//let keys=a21.keys()
//for(value of keys){
//    console.log(value) //returns 0,1,2,3,4
//}
///*
//length
//length property returns the length of an array
//*/
//let a22=[1,2,3,4]
//console.log(a22.length) //returns 4
//
///*
//map()
//array.map(cback(value,index)=>{},thisvalue)
//*/
//
//let a23=[1,2,3,4]
//let a24=a23.map((v,i)=>  v*v ,this) //returns square of the array
//console.log(a24)
//
///*
//reduce()
//The reduce() method reduces the array to a single value.
//array.reduce(function(total, Value, Index)=>{}, initialValue)
//*/
//
//let a25=[1,2,3]
//let sum=a25.reduce((s,v,i)=>{return s+v},0)
//console.log(sum) //returns 6
//
///*
//reduceRight()
//the reduceright method is same as the reduce method
//but it reduces from the right
//*/
//
//let a26=[1,2,3]
//let sum2=a26.reduceRight((s,v,i)=>{return s+v},0)
//console.log(sum2) //returns 6
//
///*
//reverse()
//The reverse() method reverses the order of the elements in an array.
//array.reverse()
//*/
//let a27=[1,2,3,4]
//a27.reverse()
//console.log(a27) //[4,3,2,1]
//
///*
//shift()
//The shift() method removes the first item of an array.
//array.shift()
//*/
//
//let a28=[1,2,3]
//a28.shift()
//console.log(a28) //[2,3]
//
///*
//slice()
//the slice method returns a new arraywith values sliced from an array
//array.slice(start,end)
//*/
//let a29=[1,2,3,4]
//let a30=a29.splice(0,2) //[1,2]
//console.log(a30)
//
///*
//some()
//some method checks all elements in an array with a  condition and returns true if any of the element passed the condition
//array.some((v,i=>{condition}))
//*/
//
//let a31=[3,1,2,3,4]
//let some=a31.some((v)=>{return v===3})
//console.log(some)
//
///*
//sort()
//sort method sorts an array based on the sort condition
//*/
//
//let a32=[1,3,2,5]
//console.log(a32.sort()) //[1,2,3,5]
//console.log(a32.sort((a,b)=>a+b)) //[5,3,2,1]
//
///*
//splice()
//splice method remove a number of avalues from an array and add new values to the array
//splice(startindex,howmanyelementstoremove,'replacevalues'.......)
//*/
//
//let a33=[1,2,3,4,5]
//a33.splice(0,2,'a','b','c')
//console.log(a33)
//
///*
//toString()
//tostring converts an array to string
//*/
//let a34=[1,2,3]
//console.log(a34.toString()) //1,2,3
//
///*
//ushift()
//unshift Add new items to the beginning of an array:
//array.unshift()
//*/
//
//let a35=[1,2,3]
//a35.unshift(0)
//console.log(a35)
