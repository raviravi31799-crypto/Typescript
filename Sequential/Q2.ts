import promptSync from "prompt-sync";

const prompt=promptSync();
let radius:number=Number(prompt("Enter radius:"));
let area:number=3.14*radius*radius;
console.log("Area:"+area);


