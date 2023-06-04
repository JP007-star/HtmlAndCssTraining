et username="jaya";
const username1="jaya";
var username2="jaya";

const obj={
    firstName:"Jaya",
    lastName:"Prasad",
    age:23
}

console.log(username);
console.log(username1);
console.log(username2);

console.log(obj.age);
circle.style.display="block";
square.innerHTML=obj.age;

const array=[1,2,3,4,3,5,1,3,2];
const uniqueArray=new Set(array);
console.log(uniqueArray);
const newArray=new Array(4);
newArray[0]=2;
newArray[2]=4;
console.log(newArray);


array.forEach(element => {
    console.log(element);
});

for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
    
}
