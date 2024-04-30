//this refer to curr context
const user={
    userName:"Kanhaiya",
    price:"899",

    welcomeMessage:function(){
        console.log(`${this.userName},welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName="sam"
user.welcomeMessage();

//in node refer to empty object
console.log(this);
//browser has Window as global object


// function chai(){
//     console.log(this);
// }
// chai();

const chai=()=>{
    let username="kanhaiya"
    console.log(this);
}
chai();
 //() do not require return keyword

 //iife is used to protect form global variables and to invoke that function immediately
 (()=>{
    console.log("Hello");
 })()