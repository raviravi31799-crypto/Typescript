function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{
    return a+b;
}
console.log(add("Hello","Java"));
console.log(add(10,20));
console.log(typeof(add("Hello",20)));
