class Vehicle {
  color: string = "red";

  constructor(col: string) {
    this.color = col;
  }
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    // we can not change the modifier in class child
    console.log("chug"); // re writes the method
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(4, "ds");
car.startDrivingProcess();

// protected can only be called from child class and not from objects
