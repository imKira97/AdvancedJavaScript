/*
var obj={num1:2};
var addToThis=function(a,b,c){
    return this.num1+a+b+c;     //this.objKey

};
console.log(addToThis.call(obj,4,2,3));
//  funName.call(obj,fn_args);

//in apply we can addd array as arguments
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));


//bind - bind attachs the function to the object  
var bound=addToThis.bind(obj);
console.log(bound);//it will function
console.log(bound(1,2,3));//we are calling bound to give the output
 

var studentObject={age:20};
var printAge=function(){
    return this.age;
}
var bindAge=printAge.bind(studentObject);
console.log(bindAge());



//Currying by bind and closure

let multiply=function(x,y){
    console.log(x*y);
}
//here we are pre setting the 1st argument x as 2
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

//above we know multiply has 2 arguments but when calling multiplyByTwo(y) we are using only one argument because we have preset the x as 2;

//if we pass 3 argument in mulitply() than it will treat as x and y as last 2 arguments
let pass3=multiply.bind(this,10,20);
pass3(10);  //this will ignore 10 as we have already passed x and y in bind 

let noPass=multiply.bind(this,);
noPass(3,4);//here we have just pass this with no arguments hence whatever we have in calling it will take that as x and y


/*
This how we doing function currying  using bind() we make a copy of multiply method and create more methods out of it by pre setting some arguments inside the function



//Currying using closure

//here this fuction  mulitply is returning a function y we know function can maintain their lexical scope hence y will know x variable even after  it execution gets over
//we have preset the x variable
let multiply =function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree=multiply(3);
multiplyByThree(10);


*/

//currying example

function addConstantValue(constant){
    
return(value1)=>{
    return(value2)=>
        value1+constant+value2;
    
}
}
//console.log(addConstantValue(10)(5));

const addSeven=addConstantValue(7);
console.log(addSeven(10));  
//it will return a function body because above line will return a function only so if we want to print it we have to pass another argument in the above line.
console.log(addSeven(10)(3)); 

//or 
console.log(addConstantValue(10)(5)(20));



let multiply =function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree=multiply(3);
multiplyByThree(10);
