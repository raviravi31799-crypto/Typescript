// String declaration in two ways
let fruits:string[]=["Apple","Banana","Orange"];
let numbers:Array<number>=[5,2,3,1,0];
console.log(fruits);
console.log(numbers.sort());


//Using index
let fruit:string[]=["Apple","Banana","Orange"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
for(var index in fruit)
    console.log(fruit[index]);
for(var i=0;i<fruit.length;i++)
    console.log(fruit[i])

let sorted:string[]=fruit.sort();
console.log(sorted);

console.log(fruit.pop());
fruit.push("papaya");
console.log(fruit);

fruit=fruit.concat(['Fig','Mango']);
console.log(fruit);

console.log(fruit.indexOf('papaya'));
console.log(fruit.shift());

console.log(fruit.includes('Melon'));

