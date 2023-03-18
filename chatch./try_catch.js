class Vehicle {
  publicMaxSpeed = 0;
  public4x4 = false;
  publicRightHandlebar = false;
  _mator = 2;
  _door = 2;
  #npatak = "Texasharjvelu hamar:";
  #varord = true;
  #petrolCount(value) {
    if (value < 20) {
      return console.log("low petrol");
    }
    if (value > 20) {
      return console.log("Normal petrol");
    }
  }
  set mator(value) {
    try {
      if (value <= 1) {
        throw new Error("Chka aytpisi tuyl mator:");
      }
      this._mator = value;
    } catch (err) {
      console.log(err.message);
    }
  }
  get mator() {
    return this._mator;
  }
  set door(value) {
    try {
      if (value < 2) {
        throw new Error("Chka mek dur unecox meqena:");
      } else if (value > 5) {
        throw new Error("Chka 5ic avel dur unecox meqena:");
      }
      this._door = value;
    } catch (err) {
      console.log(err.message);
    }
  }
  get door() {
    return this._door;
  }
  constructor(name, passengerCount) {
    this.name = name;
    this.passengerCount = passengerCount;
  }
}

class Bus extends Vehicle {}

let b = new Bus("Hyundai", "22");
b.mator = 1.5;
b.door = 3;
b.publicMaxSpeed = 180;
console.log(b);

class SuperCar extends Vehicle {
  constructor(name, passengerCount, color, price) {
    super(name, passengerCount);
    this.color = color;
    this.price = price;
  }
}
let s = new SuperCar("Lamborgini", "2", "yellow", "500000$");
s.publicMaxSpeed = 380;
s.publicRightHandlebar = true;
s.door = 2;
s.mator = 7.7;
console.log(s);

class Jeep extends Vehicle {
  constructor(name, passengerCount, price, isgoodjeep) {
    super(name, passengerCount);
    this.price = price;
    this.isgoodjeep = isgoodjeep;
    this.wheelCount = true;
  }
}
let j = new Jeep("Mercedes", "5", "250000", true);
j.public4x4 = true;
j.publicMaxSpeed = 320;
j.door = 4;
j.mator = 5.5;
console.log(j);