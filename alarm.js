/*console.log("jitnder");
let arr = [1,2,3,4];
console.log(arr);
let a = arr.shift();
console.log(arr);
console.log(a);
const readline = require("prompt-sync");
  const ps = readline();
// Enter the number
let b = ps("enter the size of array");
let number = [];
for (let i = 0; i < b; ++i) {
  number.push(ps("enter the array element"));
}
console.log(number);*/

function leftShift(arr, p){
    if(p==0){
        return;
    }
    let curr = arr.shift();
    arr.push(curr);
    p--;
    leftShift(arr,p);
    
    return arr;
}

function rightShift(arr, p){
    if(p==0){
        return;
    }
    let curr = arr.pop();
    arr.unshift(curr);
    p--;
    rightShift(arr,p);
    
    return arr;
}


const ps = require("prompt-sync");
const prompt = ps();
let arrSize = prompt("enter the size of array:");
const p = prompt("enter the value of P:");
const d = prompt("enter the value of d:");
let arr = [];
for(let i=0; i<arrSize; i++){
arr[i] = prompt("enter elements of array:");

} 
if(d==0){
let newArray = leftShift(arr, p);
console.log(newArray);
}
else if(d==1){
    let newArray = rightShift(arr, p);
console.log(newArray);
}
