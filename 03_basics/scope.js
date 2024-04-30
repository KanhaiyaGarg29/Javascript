// var c=300;
let a=300;
if(true){
    let a=10;//block scope
    const b=20;//block scope
}
console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username="kanhaiya"

    function two(){
        const website="yt"
        console.log(username)
    }
    two();
}

one()

//////////////////interesting///////////

addOne(5);
function addOne(num){
    return num+1
}


const addTwo=function(num){
    return num+2
}

addTwo(5);
//function expression cannot be used before declaration