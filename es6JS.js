/* es6 classes
class Student{

    constructor(fname,lname,roll_no,sex,dob){
        this.fname=fname;
        this.lname=lname;
        this.roll_no=roll_no;
        this.sex=sex;
        this.dob=new Date(dob);
    }

    findAge(){
        const todayYear=new  Date().getFullYear();
        const dateYear=new Date(this.dob).getFullYear();
        return todayYear-dateYear;
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    fullName(){
        return `${this.fname} ${this.lname}`;
    }
    isEligible(age){
        if(age>=18){
            console.log("Is Eligible");
        }else{
            
            console.log("Is not Eligible");
        }
    }

}
const student1=new Student('Shiva','Pandey',100,'M','10-20-1997');
const student2=new Student('Ganesh','Pandey',101,'M','12-10-2010');

console.log(student1.fullName());
console.log(student1.getBirthYear());
console.log(student1.findAge());
student1.isEligible(student2.findAge());

*/

//DOM MANIPULATION(Documebt object model)


/*
//window object is the parent object of the browser
console.log(window);
//single element selector 
//this will show our form 
console.log(document.getElementById('my-form'));

//queryselector is similar to jquery selector 
//this will select 1st h1 tag
console.log(document.querySelector('h1'));

//multiple element selector
//querySelectorAll selects multiple here we are selecting all element with class=item
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));


in querySelector we get use array method as it gives us element in form of list
but not in getElementsByClassName as it give HTMLCollection


//looping through query selector
const items=document.querySelectorAll('.item');
//items.forEach((item)=>console.log(item));

const ul=document.querySelector('.items');
//This will delete all the list item 
//ul.remove();

//to delete last item
//ul.lastElementChild.remove();

const ul=document.querySelector('.items');

//1st index to green
ul.firstElementChild.textContent='hello';
ul.firstElementChild.style.color='green';

//2nd index
ul.children[1].innerHTML='<h2>world</h2>';
ul.children[1].style.background='yellow';







//change text of 1st item
ul.firstElementChild.textContent='hello';
ul.children[1].innerText='World';//similar to textContent innerText
ul.children[2].innerHTML='<h1>Shiva</h1> ';


//change style of button
//const btn=document.querySelector('.btn');
//btn.style.background='red';



/*

//events 
const btn=document.querySelector('.btn');
//addEventListener is used to add event it take 2 argument 1st is event we want 2nd the function that we want to run when the event happend
btn.addEventListener('click',(e)=>{

    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    //change form color when we click submit
    document.querySelector('#my-form').style.background='red';

    //change body color 
    document.querySelector('body').classList.add('bg-dark');
    //bg-dark is class present in css file;

    //change last item to hello world of ilist items
    document.querySelector('.items').lastElementChild.innerHTML='<h3>Hello World</h3>'
});

*/
//
const btn=document.querySelector('.btn');
btn.addEventListener('click',(e)=>{

    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    //change form color when we click submit
    document.querySelector('#my-form').style.background='red';

    //change body color 
    document.querySelector('body').classList.add('bg-dark');
    //bg-dark is class present in css file;

    //change last item to hello world of ilist items
    document.querySelector('.items').lastElementChild.innerHTML='<h3>Hello World</h3>'
});

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='black';
});


btn.addEventListener('mouseout',(e)=>{

    e.preventDefault();
    
    document.querySelector('#my-form').style.background='yellow';
});





const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

//add event on form to validate form after submit



myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    //if any of field show msg 
    if(nameInput.value ===''|| emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all the fields';

        //after 3 sec msg should be gone
        setTimeout(() =>msg.remove(),3000);
    }else{

        //add it in list item and clear the fields 
        const li=document.createElement('li');
        //this will append value to li
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));

        //now appending li to UL
        userList.appendChild(li);

        //clear fields
        nameInput.value='';
        emailInput.value='';


    }
}
