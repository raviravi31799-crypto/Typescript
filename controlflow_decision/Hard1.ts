import PromptSync from "prompt-sync";
const prompt=PromptSync();
let total:number=Number(prompt("Enter total classes:"));
let present:number=Number(prompt("Enter present classes:"));

let percentage:number=(present/total)*100;
if(percentage>75){
    console.log(percentage+"%", "Allowed")
}
else if(percentage<75){
    let medical:string=prompt("Medical issue?:");
    if(medical=='N'){
        console.log(percentage+"%","NotAllowed");
    }
    else{
        console.log(percentage+"%","Allowed");
    }




}