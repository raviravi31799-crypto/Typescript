import PromptSync from "prompt-sync";
const prompt=PromptSync();
let code:number=Number(prompt("Enter code:"));
switch(code){
    case 1:
        let num1:number=Number(prompt("Enter num1:"));
        let num2:number=Number(prompt("Enter num2:"));
        console.log("Sum:",num1+num2);
        break;
    case 2:
        let int1:number=Number(prompt("Enter int1:"));
        let int2:number=Number(prompt("Enter int2:"));
        console.log("Product:",int1*int2);
        break;
    case 3:
        let str1:string=(prompt("Enter str1:"));
        let str2:string=(prompt("Enter str2:"));
        console.log("Joined strings:",str1+str2);
        break;
    default:
            console.log("Invalid code");
}