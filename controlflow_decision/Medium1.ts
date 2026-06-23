import PromptSync from "prompt-sync";
const prompt=PromptSync();
let age:number=Number(prompt("Enter age:"));
if(age<=10){
    console.log("Cartoon club");
}
else if(age>=10 && age<=20){
    console.log("Teens club");
}
else{
    console.log("Invalid age");
}