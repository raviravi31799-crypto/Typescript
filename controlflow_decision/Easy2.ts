import promptSync  from 'prompt-sync';
const prompt=promptSync();
let num:number=Number(prompt("Enter number:"));
if(num%2==0){
    console.log("It is even number");
}
else{
    console.log("It is odd");
}