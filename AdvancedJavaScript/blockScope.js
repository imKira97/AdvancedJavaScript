/*

Block is defined as { }

it is used to group to group multiple statements together
{
    //lines of codes

}





var a = 50;
{
var a =30;
let b = 20;
let c = 30;
}
console.log(a);

/*
Output will be 
30

since var has global scope when we declared same variable with var keyword it modify values of that variable


--------------------------------------------------------------------------------------------------------------------------------
const a = 50;
{
var a =30;
let b = 20;
let c = 30;

}

console.log(a);
/*
Output will be 
Syntax error since variable a has already been declared with const keyword 
due to scope of const and let keyword we cant change it to var 

--------------------------------------------------------------------------------------------------------------------------------


let a = 50;

{
var a =30;
let b = 20;
let c = 30;
}

console.log(a);
/*
Output will be 
Syntax error since variable a has already been declared with let keyword 
due to scope of const and let keyword we cant change it to var 


--------------------------------------------------------------------------------------------------------------------------------

var a = 50;

function fun(){
var a =30;
let b = 20;
let c = 30;
}
fun();
console.log(a);

/*
output will be
50;

because var a declared in function fun() has scope till that function only not outside 
hence when we do console.log(a) outside function  there a is 50;


--------------------------------------------------------------------------------------------------------------------------------


*/


let a = 50;

function fun(){
var a =30;
let b = 20;
let c = 30;
}
fun();

console.log(a);
/*

output will be 
50;

*/




/*

const a = 10;
{
var a = 10;
}
console.log(a);

/*
Output will be 
Syntax error since variable a has already been declared with const keyword 
due to scope of const and let keyword we cant change it to var 

--------------------------------------------------------------------------------------------------------------------------------


const a = 10;
{
    const a = 20;
    {
        const a = 50;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

/*
output will be 
50
20
10

here it check in its local scope environment for value (lexical scope of that block)



--------------------------------------------------------------------------------------------------------------------------------
const a = 10;
{
    const a = 20;
    {
        console.log(a);
    }
    console.log(a);
}
console.log(a);
/*

output will be 
20
20
10

first it check in local lexical scope here it does not find than it check in its outside block scope there a=20; hence it prints 20


--------------------------------------------------------------------------------------------------------------------------------

*/

/*

function a(){

    var b=10;
    c();
    function c(){{
        console.log(b);
    }
}
Lexical Environment- it is the local memory + reference of lexical environment of the parent
leical means hierarchy,sequence in order.


above code will create 3 execution context 1for global 2for function a() 3for function c()
in function c() we are printing b value which is not declared in function c() but it is declared in a()
when execution context  is created in memory phase it also stores lexical environment of parent hence function c() access var b of function a()


*/