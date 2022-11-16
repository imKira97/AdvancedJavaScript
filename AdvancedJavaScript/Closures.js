//setTimeOut and closures
/*
console.log('a');

console.log('b');



setTimeout(()=> console.log('c'), 1000);

console.log('d');


output will be 
a
b
d
c

why c is printed after because of setTimeout here timer is of 1sec so after 1   second c gets printed


console.log('a');
console.log('b');
setTimeout(()=> console.log('c'), 1000);
setTimeout(()=> console.log('c'), 0);
console.log('d');
Output 
a
b
d
c -with timer0
c -with timer 1000

0-10ms



//Array.map()-  gives a new with value transform in it  for.eg  create new array which element is double 
const arr=[5,1,2,3,4];

//double 
const doubleArr=arr.map(myFunction);
function myFunction(num){
    return num*2;
}
console.log(arr);
console.log(doubleArr);


//Destructuring array

let fruits = ["Apple", "Banana","Grapes","Oranges"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);


*/

/*
10 new features in ES6

1. let and const keyword- 
The keyword "let" enables the users to define variables and on the other hand, "const" enables the users to define constants. 
Variables were previously declared using "var" which had function scope and were hoisted to the top. It means that a variable can be used before declaration. 
But, the "let" variables and constants have block scope which is surrounded by curly-braces "{}" and cannot be used before declaration.

--------------------------------------------------------------------------------------------------------------------------------
2. Arrow Functions
ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.

Arrow functions are defined using the fat arrow (=>) notation.
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); // Output 30
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Multi-line Strings
ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).
It can be done as shown below :

let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4. Default Parameters
In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used.

//ES6
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//ES5
var calculateArea = function(height, width) {  
   height =  height || 50;
   width = width || 80;
   // logic
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5. Template Literals
ES6 introduces very simple string templates along with placeholders for the variables. The syntax for using the string template is ${PARAMETER} and is used inside of the back-ticked string.

let name = `My name is ${firstName} ${lastName}`;

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6. Destructuring Assignment
Destructuring is one of the most popular features of ES6. The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.

There are two types of destructuring assignment expressions, namely, Array Destructuring and Object Destructuring. It can be used in the following manner :

//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7. Enhanced Object Literals
ES6 provides enhanced object literals which make it easy to quickly create objects with properties inside the curly braces.

function getMobile(manufacturer, model, year) {
   return {
      manufacturer,
      model,
      year
   }
}
getMobile("Samsung", "Galaxy", "2020");

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

8. Promises
In ES6, Promises are used for asynchronous execution. We can use promise with the arrow function as demonstrated below.

var asyncCall =  new Promise((resolve, reject) => {
   // do something
   resolve();
}).then(()=> {   
   console.log('DON!');
})

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

9. Classes
Previously, classes never existed in JavaScript. Classes are introduced in ES6 which looks similar to classes in other object-oriented languages, such as C++, Java, PHP, etc. 
But, they do not work exactly the same way. ES6 classes make it simpler to create objects, implement inheritance by using the "extends" keyword and also reuse the code efficiently.

In ES6, we can declare a class using the new "class" keyword followed by the name of the class.

class UserProfile {   
   constructor(firstName, lastName) { 
      this.firstName = firstName;
      this.lastName = lastName;     
   }  
    
   getName() {       
     console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
   } 
}
let obj = new UserProfile('John', 'Smith');
obj.getName(); // output: The Full-Name is John Smith

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

10. Modules
Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called modules, in which each module is represented by a separate ".js" file. We can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.

export var num = 50; 
export function getName(fullName) {   
   //data
};
import {num, getName} from 'module';
console.log(num); // 50



function x(){
   let a = 10;
   function y(){
      console.log(a);
   }
   y();
}
x();

/*

output will be 
10





function x(){
   let a = 10;
   function y(){
      console.log(a);
   }
   return y();
}
x();

/*
Output will be 10
because of clousre 

--------------------------------------------------------------------------------------------------------------------------------


function x(){
   let a = 10;
   function y(){
      console.log(a);
   }
   return y;
}
console.log( x());
/*
output will be 
function y() body
f y(){
   console.log(a);
}
because x has return y;

--------------------------------------------------------------------------------------------------------------------------------
function x(){
   let a = 10;
   function y(){
   console.log(a);
   }
   return y;
   }
   const z = x();
   console.log(z());
   /*
   output will be
   10

   we know function x() has return y
   and after execution of line 
   const z = x();
   x and y both are not in call stack
   but due to beauty of function in js that is 
   (function when they are return form another function they still maintain their lexical environment i.e they still remeber where they were present)

   so when y has return not just function body has return but its clousre was also returned 
   hence output will be 10
   


   --------------------------------------------------------------------------------------------------------------------------------
   */
function x(){
   let a = 10;
   function y(){
      console.log(a);
      
   }
   a= 50;
   return y;
   }
   const z = x()
   console.log(z());

   /*

   output will be 
   50 
   undefined - because y is not returning anything  
   beacuse closures store reference of variable not the value so when y has return reference of a will be stored in closure
   and after y() function a=50; thats why output =50

   */