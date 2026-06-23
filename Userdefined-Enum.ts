//numeric enum
enum Direction{
    Up=1,
    Down,
    Left,
    Right
}
console.log(Direction);
console.log(typeof(Direction));




//String enum
enum Appstatus{
    Active="ACT",
    Inactive="INACT",
    Onhold="HOLD",
    Onstop="STOP"
}
console.log(Appstatus.Onstop);

enum Appstatuses{
    Active="ACT",
    Inactive="INACT",
    Onhold="HOLD",
    Onstop="STOP"
}
console.log(Appstatuses.Onstop);