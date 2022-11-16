//var keyword is used before es6  after es6 came we use let keyword to declare variable

//const keyword to store constant value in variable

// const pi = 3.14;


/*

Reverse Two Numbers

// let a = 100;
// let b = 200;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);
*/


/*

    Strings 
// const s = 'hello world';
// console.log(s.substring(0, 5).toUpperCase());
// const name = 'Shiva';
// let age = 25;
// let address = 'Ulhasnagar';
// //concat
// let output = "My name is " + name + "Age is " + age + "address is " + address;
// //es6 wau
// const detail = `My name is ${name}, age is ${age}, i live in ${address}`;
// console.log(detail.split(', '));
// console.log(detail);

*/
// //arrays
// const numbers = new Array(1, 2, 3, 4, 5, 6);
// //or
// const fruits = ['apple', 'mango', 'pineapple'];
// console.log(numbers);
// console.log(fruits);

// //in js we can have  multiple datatype in an array

// //adding elements 
// //1st way
// fruits[3] = 'grapes';
// //2nd using push to add in last element
// fruits.push('banana');

// //unshift to add in begining
// fruits.unshift('lemon');

// //to remove last element
// fruits.pop();
// console.log(fruits);

// //to find index of element
// console.log(fruits.indexOf('grapes'));
/*
//object literals  are key value pairs
const person={
    firstName:'shiva',
    lastName:'pandey',
    age:25,
    hobbies:['music','cricket'],
    //objects literals in objects literal
    address:{
        street:'OT SECTION 5',
        city:'Ulhasnagar',
        State:'Maharashtra'

    }
}
console.log(person);

console.log(person.firstName, person.lastName,person.hobbies[1],person.address.city);


//suppose we want to store this value into variable  
//var name should be same 
const {firstName,lastName}=person;
console.log(firstName,lastName);

//embedded object
const{address:{city}}=person;
console.log(city);

//add more properties
person.email='shiva@gmail.com';
person.mobile=777888777;
console.log(person);


*/
//arrays of objects 

const todos=[
    {
        id:1,
        task:'Take out trash',
        isCompleted:true


    },
    {
        id:2,
        task:'make breakfast',
        isCompleted:true


    },
    {
        id:3,
        task:'go for a run',
        isCompleted:false


    },

];

/*
console.log(todos);
//display 2 task name
console.log(todos[1].task);

//convert to JSON format to send to server
const todosJSON=JSON.stringify(todos);
console.log(todosJSON);

*/
//for loop
for(let i=0;i<10;i++){
   // console.log(i);
   // console.log(`Numbers are ${i}`);
}

for(let i=0;i<todos.length;i++){
    //console.log(todos[i].task);
}

//for of
for(let t of todos){
   // console.log(t.id);
}

//high order array methods to iterate in array
/*
forEach-loops through array
map-allows us to create a new array from a array
filter-allows us to create a new array from a array based on a condition


//1st forEach
//argument variable we can have multiple arguments
todos.forEach(function(todo){

    console.log(todo.task);
});
//map return array
const text= todos.map(function(todo){
    return todo.task;
});
console.log(text);

//suppose we want to filter task which is completed
/*const taskCompleted=todos.filter(function(todo){
    return todo.isCompleted==true;
});

//this will just give task name which is completed
const taskCompleted=todos.filter(function(todo){
    return todo.isCompleted==true;
}).map(function(todo){
    return todo.task;
});
console.log(taskCompleted);

/*
function getMinAndMax(arr){

    let minMax=new Array();
    let i,min,max;

    if(arr.length==1){
        minMax.min=arr[0];
        minMax.max=arr[0];
        return minMax;
    }
    if(arr[0]>arr[1]){
        minMax.min=arr[1];
        minMax.max=arr[0];
    }else{
        minMax.min=arr[0];
        minMax.max=arr[1]; 
    }
    for(i=2;i<arr.length;i++){
        if(arr[i]<minMax.min){
            minMax.min=arr[i];
        }
        if(arr[i]>minMax.max){
            minMax.max=arr[i];
        }
    }
    return minMax;
}
let arr=[1,5,3,4,8,2,9,7];
minMax=getMinAndMax(arr);
console.log(minMax.min);
console.log(minMax.max);
//document.write("\nMinimum element is ",minMax.min+"<br>");
//document.write("\nMaximum element is ",minMax.max+"<br>");
*/


/*

//== it check only the value 
const x='15';
if(x==10){
    console.log(true);
}
// === it checks with datatype
const y='10';
if(y===10){
    console.log(true);
}else{
    console.log(false);
}

if(x>5 ||y >10){
    console.log(true);
}
if(x>5 && y >10){
    console.log(true);
}else{
    console.log(false);
}


const color= x>20?'blue':'red';
switch(color){

    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;

}
*/

function addNums(num1,num2){
    console.log(num1+num2);
}
addNums(5,7); 

function convertTemp(temp){
    console.log(temp+273+'k');
}
convertTemp(30);

function convertTemp(val,unit){

    if(unit=='C'){
        console.log(val-273+'C');
    }else{
        console.log(val+273 +'k')
    }

}
convertTemp(35,'k');
convertTemp(308,'C');
