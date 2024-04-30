//for of
const arr=[1,2,3,4,5];
for(const a of arr){
    console.log(a);
}
const greetings="Hello World";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps
const map=new Map();
map.set("IN","India")
map.set("US","United States Of America")
map.set("Fr","France")
console.log(map);

for(const [key,value] of map){
   console.log(key+" "+value);
}

// const myObject={
//     game1:"NFS",
//     game2:"Spiderman"
// }
//cant iterate using for of

const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//map cannot be iterated using for in 