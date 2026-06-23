import PromptSync from "prompt-sync";
const prompt=PromptSync();
let length:number=Number(prompt("Enter length:"));
let breadth:number=Number(prompt("Enter breadth:"));
if(length==breadth){
    console.log("It is a square");
}
else{
    console.log("Not a square");
}
