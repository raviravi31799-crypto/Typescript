import PromptSync from "prompt-sync";
const prompt=PromptSync();
let num:number=Number(prompt("Enter number:"));
if(num%2==0){
    console.log(num/2);
}
else{
    console.log(num*3+1);
}