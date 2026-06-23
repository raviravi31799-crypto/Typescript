import PromptSync from "prompt-sync";
const prompt=PromptSync();
let num:number=Number(prompt("Enter number:"));
if(num>0){
    console.log("Positive number");
}
else if(num<0){
    console.log("Negative number");
}
else{
    console.log("Zero");
}
