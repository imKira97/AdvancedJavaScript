/*

//what is callback function 


//setTimeout take 1st parameter as callback function which will be called after timer
setTimeout(function(){
    console.log('Hello');
},5000);

function x(y){
console.log('inside x');
y();
};

//when calling x we are passing function y this y() is called callback function

x(function y(){
    console.log('inside y');
}); 




//any operation blocking the call stack it means blocking the main thread


document.getElementById('btnClickMe')

    //after click it will call this callback function  so when we click on button  than this function will be pushed  in the call Stack.
    .addEventListener('click',function abc(){
        console.log('btn clicked');
    });

// give  how many times user clicked on the button we will do this with closure  


//example with closure

function attachEventListeners(){

    let count=0;
    document.getElementById('btnClickMe')
    .addEventListener('click',function abc(){
        console.log(`btn clicked ${++count} times`);
    });

}
attachEventListeners();


//garbage collection & remove event listeners

//we need to remove event listeners because they are heavy and occupy space in  the memory  hence we have lots of eventListeners our page might go slow 
//so when we removeEventListeners all the variables that is stored from closure will be garbage collected



/*


Question1


setTimeout(() => console.log('timer expired'), 1000)
function x(y) {
console.log('inside x');
y();
}
x(function y(){
console.log('inside y')
})

Output will be 
inside x
inside y
timer expired


setTimeout(() => console.log('timer1 expired'), 1000)
setTimeout(() => console.log('timer2 expired'), 0)
function x(y) {
console.log('inside x');
y();
}
x(function y(){
console.log('inside y')
})

Output will be 
inside x
inside y
timer2 expired
timer1 expired




setTimeout(() => console.log('timer1 expired'), 1000)
setTimeout(() => console.log('timer2 expired'), 0)
function x(y) {
console.log('inside x');
y();
}
x(function y(){
setTimeout(() => console.log('inside y'), 0)
})

//output will be 
inside x
timer2 expired
inside y
timer1 expired

/*
//first setTimeout will be read but due to timer it will not be pushed inside callStack till timer gets epired and we know 
js is does not wait for others to complete so it will go to next function and this function will be pushed inside callStack and remove after execution

suppose  for example quesion 3
here 1st timer1 will be expired after 1 second
timer2 will be expired after 10ms
so it will go into x() first and print inside x
than in y() but here also there is timer of 10ms  
since  timer2 will be expired   first and than y() 
we will get output as timer2  expired after that inside y 
and in last after 1 second timer1 expired.





document.addEventListener('DOMContentLoaded',function (){
    console.log('DOMContent has Loaded')
});


Garbage Collector- it remove unwanted variables from memory which is not needed anymore

we need it to make our browser to run smoothly. 


if we  have lot of evenetListener in our site than it can make our browser to go slow 
we need to remove event listeners because they are heavy and occupy space in  the memory  hence we have lots of eventListeners our page might go slow 
we can do that up remove event listeners or garbage collector




console.log('start');
//document. calls DOMS API of browser and .addEventListener will register a callback function on an event(click) in WEB APIs environment
document.getElementById('btnClickMe')
    .addEventListener('click',function cb(){
        console.log('callback function');
    });
console.log('end');



GEC will be push into call stack
1st will print start 
than on 2line a callback function which is registered in WEB APIs environment
than it prints end and pop out from call stack

this cb function will be inside webAPI function till someone performs click
once anyone has clicked the button this callbackFunction will be move to callBack Queue and event loop than poped this cb from call back queue and
 pushed it into callStack and than this function gets executed and prints callback.




console.log('start');
setTimeout(function cbTimer(){
    console.log('timer');
},5000);

fetch("https://api.netflix.com")
    .then(function cbFetch(){
        console.log('fetch complete');
    });
console.log('end');

/*
Output will be 
start 
end 
fetch complete
timer


here GEC will be pushed into call stack 
1st line will printed (start)
setTimeout is called its regitstered  callback function cbTimer into webAPI environment till timer expired 5s
fetch() also registered callback function cbFetch into webAPI environment till  response is received from the request in faster time than timer suppose 50ms
than this cbFetch() is pushed into micro task queue 
suppose here in cbFetch function we have 1000s lines of code and  till its get executed timer expired and cbTimer is pushed into callback queue 

since microTask queue has high priority than callback queue  cbTimer will wait till cbFetch is done  its execution
once cbFetch is done its execution than itis pushed inside call stack  
and than cbTimer gets pushed into callStack once cbFetch environment is pop from call Stack.


console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 1000)
console.log('d')
/*
a
b
d
c

c will last because of timer 



console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 0)

console.log('d');
/*
a
b
d
c

c will last because of timer  0 will also be means some time after 10ms


console.log('a');

console.log('b');

setTimeout(() => console.log('e'), 1000)

setTimeout(() => console.log('c'), 0)

console.log('d')
/*
output will be
a
b
d
c
e 
c- timer(call back function this will come in callstack after 10ms second)
e- timer(call back function this will come in callstack after 1 second)




const obj1={
    key1:'value1',
    key2:'value2'
}

 const obj2=obj1;
obj2.key1='newValue';
console.log(obj1.key1);
// here we are storing referece of obj1 to obj2 anyvalue change by any one of these object it will change for both of the objects since both are pointing to the same reference.
// we also called it as obj2 is deep copy of obj1

//Spread operator- To resolve issue of above we use spread operator . It creates a new reference of obj so when we change value of 1obj it will not change in another object


const obj3={...obj1};
obj3.key1='obj3Value';
console.log(obj3);
console.log(obj1);

//also we can do change we value and also can add new keys 
const obj4={...obj3,key1:'obj4Value',key3:'value3'};
console.log(obj4);

const arr1=[1,2];
const arr2=[3,4];

//this will create a new array with union of both arrays
const arr3=[...arr1,...arr2];

//this will create a new array where key is arr1 and value is of arr2
const arr4={...arr1,...arr2};



console.log(arr3);
console.log(arr4);
*/

studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
	}
    
function average(obj){
    const age=Object.values(obj);
    const arrSize=age.length;
    let totalAge = 0;
    age.forEach( (i)=>{
        totalAge=totalAge+i;
    });
    return totalAge/arrSize;
 

}
console.log(average(studentobj));





