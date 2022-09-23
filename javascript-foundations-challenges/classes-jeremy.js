// ## Challenges

// 1. Coffee Maker
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}

// - Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
var blackCoffee = new Coffee("black", 0, 0);
console.log(blackCoffee);

// - Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
var momsCoffee = new Coffee("Mom's Coffee", 1, 2);
console.log(momsCoffee);

// 2. Latte Maker
// - Write a Latte class that takes a flavor, a milk type and a number of shots.
// - Write a method for your Latte class that outputs the latte's profile.
class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor.toLowerCase();
    this.milk = milk.toLowerCase();
    this.shots = shots;
  }
  shot() {
    if (this.shots > 1) {
      return `${this.shots} shots`;
    } else {
      return `${this.shots} shot`;
    }
  }
  describe() {
    console.log(
      `A ${this.flavor} latte with ${
        this.milk
      } milk and ${this.shot()} of expresso.`
    );
  }
}

// - Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regularLatte = new Latte("regular", "whole", 1);
regularLatte.describe();

// - Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnutLatte = new Latte("hazelnut", "almond", 2);
hazelnutLatte.describe();

// 3. Volume of a Cylinder
// - Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr^2*h (r is the radius and h is the height of the cylinder)
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

// - Write the code that creates three unique cylinder objects
var largePipe = new Cylinder(12, 15);
var shortPipe = new Cylinder(8, 4);
var fatPipe = new Cylinder(75, 25);

largePipe.getVolume();

console.log("🤷‍♂️   👉 largePipe.getVolume()", fatPipe.getVolume());

shortPipe.getVolume();
fatPipe.getVolume();
