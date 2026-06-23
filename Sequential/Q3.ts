import promptSync from "prompt-sync";

const Prompt=promptSync();
let number1:number=Number(Prompt("Enter number1:"));
let number2:number=Number(Prompt("Enter number2:"));
let sum:number=number1+number2;
console.log("Sum:",sum);