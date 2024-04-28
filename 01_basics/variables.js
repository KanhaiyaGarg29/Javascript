const accoundId=1432;
let accountEmail="kahaiya@gmail.com"
var accountPassword="12345";
accountCity="Jaipur"

//accoundId=2 //not allowed
accountEmail="abc@gmail.com"
accountPassword="123"
accountCity="Rajpura"
console.log(accoundId);
/*
Prefer not to use var
because of issue in bblock scope and functional scope
*/
console.table([accoundId,accountEmail,accountPassword,accountCity])