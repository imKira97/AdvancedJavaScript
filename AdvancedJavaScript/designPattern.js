/*
This keyword- inside the scope


this in global scope,inside function,inside object,innerfunction, constructor and classes
*/

//1st global scope (window);
//"use strict";
this.table='window table';
/*
 const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};



//innerfunction

const cleanTable=function(soap){

    const innerfunction=(soap1)=>{

        console.log(`cleaning ${this.table} using ${soap1}`);
    }
    innerfunction(soap);
    
};

console.log(window.table);

//because window is global scope so we can all table with window 

//this inside object and methods

this.garage={
    table:'garage table',
    //objects can have methods also
};

let room1={
    table:'room1 table',
};


//this inside constructor 

//this constructor 
let createRoom=function(name){
    this.table=`${name} table`;
}

const brotherRoom=new createRoom('brother');
const sisterRoom=new createRoom('sister');



// if we use strict keyword   this will not work  inside function because we dont have access to this so here we will use call() to call out cleanTable()
// cleanTable();

// //using call() we can use methods on different objects
// cleanTable.call(this,'soap1');
// cleanTable.call(this.garage,'soap2');
// cleanTable.call(room1,'soap3');

// //calling on constructor

// cleanTable.call(brotherRoom,'soap3');
// cleanTable.call(sisterRoom,'soap3');



//instead of creating cleaning table function we will use prototype what that will do is every object that has been created using createRoom can use this cleanTable function

createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning table of ${this.table} using ${soap}`);
};
brotherRoom.cleanTable('soap1');
sisterRoom.cleanTable('soap2');

//and we can directly call cleanTable without call();

//inside class

class createRoom1{
    
    constructor(name){
        this.table=`${name} table`;
    }
    //clean room function inside class
    cleanRoom2(soap){
        console.log(`cleaning table of ${this.table} with soap ${soap}`);
    }
}

const room3=new createRoom1('Room 3');
const room4=new createRoom1('Room 4');

room3.cleanRoom2('soap x');
room4.cleanRoom2('soap y');


*/
class Student{

   static count=0;
    constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.count++;
    }

    isEligible(marks){

        if(this.marks<40){
            console.log(`not eligible`);
        }
        else{
            console.log(`is eligible`);
        }
    }
     static countStudent(){
        console.log(`Number of student is - ${Student.count}`);
    }

    isEligibleForPlacement(){
        
        const minMarks=75;
        const minAge=21;
        return ()=>{
            if(this.marks>minMarks && this.age>=minAge){
                console.log(`${this.name} is Eligible ForPlacement`);
            }else{
                console.log(`${this.name} is not Eligible ForPlacement`);
                
            }
        }

       
    }
    

    
} 

const student1=new Student('komal','20','777888','65');
const student2=new Student('sid','21','777888','35');
const student3=new Student('pari','20','777888','30');
const student4=new Student('yash','19','777888','85');
const student5=new Student('monu','23','777888','90');

student1.isEligible();
Student.countStudent();
student1.isEligibleForPlacement()();
student2.isEligibleForPlacement()();
student3.isEligibleForPlacement()();
student4.isEligibleForPlacement()();
student5.isEligibleForPlacement()();




/*
//Fat Arrow Functions
"use strict";

var getA=function(a){
    return a;
};
console.log(getA('a'));
//same function using arrow functions
// we dont have to explicitly write return like above
let getB=(b)=>b;
console.log(getB('arrow'));

//square of a numbers using  bracket than we have to use return 

let squareNum=(num)=> {return num*num};
console.log(squareNum(20));

var x=function(){
    this.value=1;
    setTimeout(function(){
        this.value++;
        console.log(this.value);

    },1);
}
var xx=new x();
/*
In above code this will not work in innerfunction due to scope  note when creating object using new this will not work  

here we can use arrow functions because arrow functions inside inner functions because arrow functions doesnt have this for its own its uses outer function this



var y=function(){
    this.val=10;
    setTimeout(() =>{
        this.val++;
        console.log(this.val);

    },1);
}
var yy=new y();

var num2=function(){
    console.log(arguments[0]);
};
num2(2,3,5);
//output will be 2

//but when using arrow functions

var x2 = (...n) =>{
    console.log(n[0]);

};
x2(1,2,3);  
*/