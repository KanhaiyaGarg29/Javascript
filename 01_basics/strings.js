const name="kanhaiya"
const repoCount=10;
// console.log(name+repoCount+" value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String
("Kanhaiya")
// console.log(gameName[0]);
console.log((gameName.__proto__));

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log((gameName.charAt(2)));

console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(4,-1)
console.log(anotherString);

//trim replace
//includes
const gameName2="Kan-haiy-a"
console.log(gameName2.split('-'));