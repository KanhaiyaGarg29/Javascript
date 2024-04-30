const coding=["js","ruby","cpp","python","java"]
coding.forEach((item)=>{
   console.log(item);
})
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
 })

 const myCoding=[
    {
        name:"JavaScript",
        file:"js"
    },
    {
       name:"Java",
       file:"java"
    },
    {
        name:"Python",
        file:"py"
    }
 ]

 myCoding.forEach((item)=>{
    console.log(item.name);
 })//for each does not return any value

 const myNums=[1,2,3,4,5,6,7,8,9,10];
 const filterArray=myNums.filter((num)=>{
    return num>4
 })
 console.log(filterArray)
 
//  const newNums=myNums.map((num)=> num+10)
const newNums=myNums.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=>num>40);
 console.log(newNums);

const myArray=[1,2,3];
const total=myArray.reduce((acc,cv)=>{
    console.log(acc+" "+cv);
    return acc+cv
},0)
console.log(total);