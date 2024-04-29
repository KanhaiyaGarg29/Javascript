const myArr=[0,1,2,3,4,5];
console.log(myArr[0]);

const myArray2=new Array(1,2,3);
console.log(myArray2.length);

//Array Methods
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
//add at first in array
myArr.unshift(0)
console.log(myArr);
//pop at first
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

//converts to string
const newArr=myArr.join()
console.log(newArr);

//slice ,splice
console.log(("A ",myArr));
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("b",myArr);

//splice manipulate original array
const myn2=myArr.splice(1,3);
console.log(myn2);

const marvel=["thor","ironman","spiderman"]

const dc=["superman","flash","batman"];

// marvel.push(dc);
// console.log(marvel);

// const marvelDc= marvel.concat(dc);
const marvelDc=[...marvel,...dc]
console.log(marvelDc);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const usuable_another_array=anotherArray.flat(Infinity)
console.log(usuable_another_array);

console.log(Array.isArray("Kanhaiya"));
console.log((Array.from("kanhaiya")));
console.log((Array.from({name:"Kanhaiya"}))); //interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));