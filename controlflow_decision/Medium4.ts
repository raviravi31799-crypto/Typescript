import PromptSync from "prompt-sync";
const prompt=PromptSync();
let total:number=Number(prompt("Enter total count:"));
let deer:number=Number(prompt("Enter deer count:"));
let rabbit:number=Number(prompt("Enter rabbit count:"));
let birds:number=Number(prompt("Enter birds count:"));
let squirrels:number=Number(prompt("Enter squirrels count:"));
let counting:number=deer+rabbit+birds+squirrels;
if(counting==total){
    console.log("Baby lion is well behaved");
}
else if(counting<total){
    console.log("Baby lion is mischievous");
}
else{
    console.log("Counted wrongly");
}