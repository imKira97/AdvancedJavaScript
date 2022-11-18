
a();
b();
function a(){
console.log('inside a');
}
var b = function (){
console.log('inside b');
}

/*
Output will be
inside a
TypeError: b is not a function

here both a and b are called 1st 
but in execution context b is stored as a variable hence it will throw an error

2) Give example of function declaration
function abc(){
    console.log('inside abc');

}

3) Give example of function expression

var b=function(){
    console.log('inside function');
}

4) Give example of anonynomous function

function(){
    console.log('inside function');
}
this will throw an syntax error : fuunction statement requires a function name
hence anonynomous functions are used to store values in variables
for example
var a=function(){
    console.log('hello');
};


5)Write down the difference between params and arguments

params are using in function declaration();
for example function abc(param1,param2){};

arguments are used when the function is called
for example abc(arg1,arg2);


6)What are first class function?. Give an example with code

we know in JavaScript function can be treated as values . So when we pass a function as argument for another function it is known as first class function
It is an ability to use functions as values

function abc(param1,param2){

}
var a=function(){
};
var b=function(){};

abc(a(),b());


*/