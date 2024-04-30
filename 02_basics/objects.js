//singleton
Object.create

//objects literals
const user={
    name:"Kanhaiya",
    age:"21",
    location:"Rajpura",
    email:"kanhaiya@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(user.email);
console.log(user["email"]);
//symbol have to use[]

user.email="kanhaiya123@gmail.com"

// Object.freeze(user); 
user.greeting=function(){
    console.log("Hello user");
}
user.greeting();

user.greeting2=function(){
    console.log(`Hello ${this.name}`);
}

user.greeting2()

// const user1=new Object();
const user1={}
user1.id="123abc",
user1.name="Sam",
user1.isLoggedIn=false;
console.log(user1);

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kanhaiya",
            lastname:"Garg"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"k@gmail.com"
    },
    {
       id:2,
       email:"l@gmail.com" 
    }
]
console.log(users[1].email);

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(user1.hasOwnProperty('isLoggedIn'));

const course={
    courseName:"Js",
    price:"999",
    courseInstructor:"Hitesh"
}
const{courseInstructor:instructor}=course
console.log(instructor);

