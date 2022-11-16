/*
Window and  this keyword - both is provided by JS Engine  even if we dont write any code in our js page.

window is golobal object which is created along with global execution context and this var is created along with global execution context

at global level window===this (true)

global space - and code which is written outside any function is inside global space

so whenever we creat any variable and function in global space it get attached to window object.



//examples
var a=10;
function hello(){
    console.log("hello");
}
console.log(window.a);
console.log(a);
// both ways give same result
console.log(this.a);

*/

/*
//Question 1
var a = 2;
var c = 2;
function b(){
    var x = 2;
    var c = 4;
    console.log(c);
}

console.log(a);
console.log(this.a);
console.log(this.c);
console.log(this.x);
console.log(window.a);
console.log(window.x);
console.log(b());


2
2
2
undefined not defined in global(window )
2
undefined (not defined in global)
4
*/


/*
Lexical Environment- it is the local memory + reference of lexical environment of the parent
leical means hierarchy,sequence in order.
Scope chain -chain of lexical environment and its parent reference.


Question 2
function abc() {
    console.log(a);
    }
    var a = 7;
    abc();
/*
Output will be 7 
1st it will check it its own environment whether a is defined or not since it is not defined there
it will than check in gloabal environment here a is defined as 7 
this is because lexical environment and scope chaining 





//Question 3
function abc() {
    console.log(a);
    }
abc();
var a = 7;

//output will be undefined 
/*
Since in global execution  context
1st memory creation phase abc():{} a:undefined 
2nd code execution phase function is called  and so the function creates it our execution context 

here for a it checks in gloabal environment for value a which is undefined
since function is called before assign var a value this output has come



//Question 4
function outerfunction() {

    console.log(a);
    var c = 10;
    innerfunction();
    function innerfunction() {
    console.log(b);
    console.log(c);
    }
    
    }
    var a = 7;
    
    var b =3
    
    
    
    outerfunction();

    /*
    Output will be
    7

    3

    10

    execution context code of global 1st a=7 b=3 and than calling outer function

    in outer function  1st line to call console.log(a) and than innerfunction 

    so 1st 7 will print
    than call goes to innerfunction and print b and c



    */


    //question 5
    function outerfunction() {

        console.log(a);
        
        var a = 10;
        
        
        
        innerfunction();
        
        
        
        function innerfunction() {
        
        console.log(a);
        
        console.log(window.a);
        
        console.log(this.a);
        
        }
        
        }
        
        
        
        var a = 7;
        
        var b =3
        
        
        
        outerfunction();

        /*
        outtput is
        undefined
        10
        7
        7



        Output will be 
        undefined  -bcoz first it check in local environment for value since a is defined here but value has not been assigned hence a= undefined

        than call goes in innerfunction 
        and than 
        10 check in outerfunction environment
        7  window global environment
        7 this global environment

        */