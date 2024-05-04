let myname="Kanhaiya  "
console.log(myname.length);

//create a method true length
let anotherUsername="ChaiAurCode     ";
String .prototype.truelength=function(){
    console.log(`True Length is : ${this.trim().length}`)
}
anotherUsername.truelength()

let myHeros=["thor","spiderman"];
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.kanhaiya=function(){
    console.log(`kanhaiya is present in all objects`)
}
Array.prototype.heykanhaiya=function(){
    console.log("Hello")
}

heroPower.kanhaiya()
myHeros.kanhaiya()
myHeros.heykanhaiya()
// heroPower.heykanhaiya() 

const user={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTIme:true,
    __proto__:TeachingSupport
}
// Teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)