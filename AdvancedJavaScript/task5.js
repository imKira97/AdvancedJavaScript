/*

let, const and var
temporal deadzone
different types of errors- syntaxerror,reference error and typeerror

in const both declarations and initialization should be in the same statement




----------------------------------------------------------------
console.log(a);
console.log(b);
let a =5;
var b =6;
console.log(b);

/*
Output-
reference error-cannot access a before initialization
we cant use let var before initialization because they are stored in temporal deadzone not in global environment



----------------------------------------------------------------
/*
QUESTION 2



What is the difference between type error vs syntax error vs reference error.

Give Examples of when you can encounter each one of them.


reference error- when there is no reference present in engine of a variable which is not declared in the global environment

e.g console.log(c);
var a=10;

----------------------------------------------------------------
type error-  on const var when we again intialize some different value 

e.g 
const a=10;
a=5;

it will throw type error

----------------------------------------------------------------
syntax error- when there is error in syntax 
for e.g 
const a;
a=10;
here we will get syntax error: Missing intitializer for const variable
since in const declarations and initialization are in the same statement.

also when we try to declare a let variable multiple times
e.g let b=10;
    let b=5;




----------------------------------------------------------------
console.log(a);
var a = 5;
console.log(b) ;

Output
undefined
reference error b is not defined
------------------------------------------------------------------------------------------------

let a = 5;
var b = 6;
console.log(this.b);
console.log(window.b)
console.log(window.a)
console.log(this.a);

output
6
6
undefined
undefined

since let a is not attach to window 
------------------------------------------------------------------------------------------------
let a =5;
let a = 6;

output-
will throw syntaxError 
since in let  we cant declare same variable twice

------------------------------------------------------------------------------------------------
let a =6;

const b;

output-
syntaxError
will also throw syntaxError since in const variable declarations and initialization should happen together
*/

//Iterating over objects

//in objects we store values in key-value pairs
var obj={
    "name":"shiva",
    "email":"shiva@gmail.com",
    "dob":"20-10-1997"
}

/*
//we use Object.keys to iterate over keys
var objKeys=Object.keys(obj);
objKeys.forEach(keys =>{
    console.log(obj[keys]);

})
*/
//insteaf of declaring array we can directly iterate over values like

Object.keys(obj).forEach(keys =>{
    console.log(obj[keys]);

})