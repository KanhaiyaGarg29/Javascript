function say(){
    console.log("Kanhaiya");
}
say()

function add(a,b){
   return a+b;
}
console.log(add(2,4));
console.log(add(3,"a"));
console.log(add(3,null));

function logInMessage(username="Sam"){
    if(!username){
   console.log("Enter a username")
   return;
    }
    return `${username} just logged in`
}
console.log(logInMessage("Kanhaiya"));
console.log(logInMessage());

function calculateCartPrice(val1,val2 ,...num){
  return num
}
console.log(calculateCartPrice(200,400,500,2000));

const user={
    userName:"Kanhaiya",
    price:"299"
}
function handleObject(obj){
    console.log(`Username is ${obj.userName} and price is ${obj.price}`);
}

handleObject(user);