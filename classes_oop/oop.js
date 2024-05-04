const user={
username:"Kanhaiya",
loginCount:8,
signedIn:true,

getUserDetails:function(){
    console.log("Got user details from database");
    console.log(`${this.username}`)
    console.log(this)
}
}
//this refer to current context
user.getUserDetails();

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

   // return this; //implicity return
}

const userOne=new User("Kanhaiya",12,true)
const userTwo=new User("Chai aur Code",11,false)
console.log(userOne.constructor)
console.log(userTwo)
