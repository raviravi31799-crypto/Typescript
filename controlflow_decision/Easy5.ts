import PromptSync from "prompt-sync";
const prompt=PromptSync();
let amount:number=Number(prompt("Enter amount:"));
if(amount<=15000){
    console.log("price is within the budget");
}
else{
    console.log("Price is beyond the budget");
}
