const score =400;
console.log(score);

const newNumber=new Number(100);
console.log(newNumber);

console.log(newNumber.toString().length);
console.log(newNumber.toFixed(2));

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1))+min));