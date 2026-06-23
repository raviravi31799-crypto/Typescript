class Car{
    public brand:string;
    private speed:number;
    protected fuel:string;

    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand;
        this.speed=speed;
        this.fuel=fuel;
    }
public accelerate(){
    this.speed+=10;
    console.log(`Accelrating to ${this.speed}km/h`);
}
private refuel(){
    console.log(`Refueling ${this.fuel}`);
}
protected honk(){
    console.log("Honk,honk!");
}
public displayCarInfo(){
    console.log(`Brand:${this.brand}`);
     console.log(`Speed:${this.speed}`);
      console.log(`Fuel:${this.fuel}`);
    this.refuel();
    this.honk();
}

}
let myCar=new Car("Toyata",90,"Gasoline");
console.log(`Brand:${myCar.brand}`);
myCar.accelerate();

//myCar.refuel();
//myCar.honk();
myCar.displayCarInfo();
