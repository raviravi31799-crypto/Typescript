import PromptSync from "prompt-sync";
const prompt =PromptSync();
let age:number=Number(prompt("Enter age:"));
if(age>=4){
    console.log("Eligible");
}
else{
    console.log("Not eligible");
}