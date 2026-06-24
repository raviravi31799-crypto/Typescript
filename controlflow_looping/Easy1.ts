import promptSync from "prompt-sync";

const prompt = promptSync();

let n: number = Number(prompt("Enter N: "));

for (let i = 1; i <= n; i++) {
   console.log(i + " ");
}