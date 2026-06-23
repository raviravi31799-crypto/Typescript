function Somefun(){
    if(true){
        var localvar=10;
        console.log(localvar);
    }    console.log(localvar);
   function nested()
    {
        console.log(localvar);
    }
}