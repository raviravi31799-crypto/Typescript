import PromptSync from  "prompt-sync";
const prompt=PromptSync();
let item:number=Number(prompt("Enter no.of.items:"));
let name:string=prompt("customer's name:");
if(item<10){
    console.log(name,item*12);
}
else if(item>=10 && item<=99){
    console.log(name,item*10);
}
else{
    console.log(name,item*7);
}
