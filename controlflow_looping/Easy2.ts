import promptSync from "prompt-sync";

const prompt = promptSync();
let m: number = Number(prompt("Enter m: "));
let n: number = Number(prompt("Enter n: "));
let power: number = 1;
for (let i = 1; i <= n; i++) {
    power =power* m;
}
console.log(power);