const s='hello world';
//console.log(s.substring(0,5).toUpperCase());

//constructor 
function Student(fname,lname,roll_no,sex,dob){
    this.fname=fname;
    this.lname=lname;
    this.roll_no=roll_no;
    this.sex=sex;   

    this.dob=new Date(dob);
    
   /* this.age=function(){

        const todayYear=new  Date().getFullYear();
        const dateYear=new Date(dob).getFullYear();
        return todayYear-dateYear;
        
    }
    */
    

    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }
    this.fullName=function(){
        return `${this.fname} ${this.lname}`;
    }

}


//with the help of prototype
Student.prototype.age=function(){
    const todayYear=new  Date().getFullYear();
    const dateYear=new Date(this.dob).getFullYear();
    return todayYear-dateYear;
}

Student.prototype.isEligible=function isEligible(age){
    if(age>=18){
        console.log("Is Eligible");
    }else{
        
        console.log("Is not Eligible");
    }
}

const student1=new Student('Shiva','Pandey',100,'M','10-20-1997');
const student2=new Student('Ganesh','Pandey',101,'M','12-10-2010');

console.log(student1.fullName());
console.log(student1.getBirthYear());
//console.log(student1.age());



if(student1.age()>student2.age()){
    console.log(`${student1.fname} ${student1.lname}`);
}else{
    console.log(`${student2.fname} ${student2.lname}`);

}

student1.isEligible(student1.age());
student1.isEligible(student2.age());








/*

//ES6 classes 
class User{

    static count=0;

    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
        this.register();
        User.count++;


    }
    static countUser(){
        
        console.log('total numbers of user are '+User.count);
        
    }
    register(){
        
        console.log(this.username+' is now registered');
    }


}

class Member extends User{
    constructor(username,password,email,memberPackage,dateOfJoining){
        super(username,password,email);
        this.package=memberPackage;
        this.dateOfJoining=dateOfJoining;
        this.memberShipActiveDate=new Date(dateOfJoining.setMonth(dateOfJoining.getMonth()+1)); 
        
    }
    renewMemberShip(){
        const validTill=this.memberShipActiveDate;
        if(this.package=='standard'){
           
            this.memberShipActiveDate=new Date(validTill.setMonth(validTill.getMonth()+1));


            return this.memberShipActiveDate;
        }
        else if(this.package=='yearly'){
            this.memberShipActiveDate=new Date(validTill.setFullYear(validTill.getFullYear()+1));
            return this.memberShipActiveDate;
        }
        else{
            return this.memberShipActiveDate;
        }
    }

    

    


}
const member1=new Member('Shiva','pass123','shiva@gmail','yearly',new Date());
const member2=new Member('abc','pass123','shiva@gmail','standard',new Date());
const member3=new Member('def','pass123','shiva@gmail','',new Date());

console.log(member1.renewMemberShip());
console.log(member1.memberShipActiveDate);

console.log(member2.renewMemberShip());
console.log(member2.memberShipActiveDate);

console.log(member3.renewMemberShip());
console.log(member3.memberShipActiveDate);


*/




