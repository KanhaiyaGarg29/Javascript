if (2==='2') {
   console.log("hello"); 
}
else{
    console.log("Not equal");
}
//== only value
//=== type+value

const userLoggedIn=true;
const debitcard=true;
if(userLoggedIn && debitcard){
    console.log("Allows to buy courses");
}
else{
    console.log("Not allowed");
}
 
const month=3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    
    default:
        console.log("Wrong input");
        break;
}

const userEmail="g@gmail.com"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}

//falsy -> false,0,BigInt 0n,"",null,undefined,NaN

//Nullish Coalescing Operator ??
// let val1;
// val1=null??10

// console.log(val1);

//Ternary Operator