function show(id:number,name:string,email?:string){
    console.log("ID:",id,"Name:",name);
    if(email!=undefined){
        console.log("Email:",email);
    }
}
    show(101,"Jothika");
    show(102,"ravi","ravi@gmail.com");
