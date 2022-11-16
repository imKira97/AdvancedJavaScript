/*
Hoisting in js  is phenomenon by which we can access the variable and function before initialiaties them.


if we use variable before initializing it we gets output undefined
and we use function-name before initializing we gets it body 

it because of Execution context since we know 1st phase is variable and function memory allocation 
and than in 2nd phase code gets executed



*/
/*
Question 1 
var a = 3;
function printName(name){
console.log(name)
}
printName("YAVTECH");
console.log(a)

Output -
YAVTECH
3

//after initializing we are calling function and variable so in Execution context we will have value assigned to it


//QUESTION 2

printName("YAVTECH");
console.log(a);
var a = 3;
function printName(name){
console.log(name)
}

Output- YAVTECH
        undefined

// in memort allocation we will function body and variable as undefined
and when in code execution step we will get function output  but since we are printing value of variable before initializing it we will get output undefined



//Quesion 3
console.log(printName());
console.log(a);
var a = 3;
var printName = (name) => {
console.log(name)

}

output - here we will get error since we have use arrow function  printname is getting treated as variable and not as function 



//QUESTION 4

console.log(printName);
console.log(a);
var a = 3;

var printName = function (name) {
console.log(name)

}

//output undefined undefined variable is called before initializing  

*/

//QUESTION 5



console.log(printName);
console.log(a);
//commented var a=5
var printName = function (name) {

console.log(name)

}

/*
Output undefined
and than error
since variable is not declared 
*/

