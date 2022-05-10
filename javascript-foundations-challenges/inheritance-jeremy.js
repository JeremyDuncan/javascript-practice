// ## Challenges
// 1. **Story**: As a programmer, I can make a car.
// - Write a variable called myCar which is an instance of the class Car
// 2. **Story**: As a programmer, I can give my car a model on initialization.
// - The model for the car class can be "generic car"
// 3. **Story**: As a programmer, I can give my car a year on initialization.
// - The year for the car class can be "myCar year"
// 4. **Story**:	As a programmer, I can tell how many wheels myCar has.
// - Calling the method wheels will return 4

// 13. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// 14. **Story**: As a programmer, I can turn the lights in all my cars on and off.
// 15. **Story**:  As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// 16. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
  class Car { 
    constructor(year, model){
      this.wheels = 4
      this.model = model
      this.year = year
      this.rpm = 0
      this.lights = "Off"
      this.signal = "Off" 
    }
    turnLeftSignal() {
      this.signal = "Left";
    }
    turnRightSignal() {
      this.signal = "Right";
    }
    turnSignalOff() {
      this.signal = "Off";
    }
    turnLightSwitch() {
      if (this.lights === "Off") {
        this.lights = "On";
        console.log(`lights are ${this.lights}`);
      } else {
        this.lights = "Off";
        console.log(`lights are ${this.lights}`);
      }
    }
    accelerate() {
      this.rpm += 250
    }
    decelerate() {
      if (this.rpm > 0) {
        this.rpm -= 250
      }else {
        this.rpm = 0
      }
    }
    getWheelCount() {
      console.log(this.wheels);
    }
  }

  var myCar = new Car(2012, "generic car");
  console.log(myCar);
  myCar.getWheelCount();

// 4. **Story**:	As a programmer, I can make a Tesla car.
// - class Tesla inherits from class Car
// - Create an object called myTesla which is a instance of class Tesla
// 5. **Story**: As a programmer, I can give my Tesla a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 6. **Story**: As a programmer, I can give my Tesla a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
  class Tesla extends Car{
    constructor(year, model){
      super(year, model)
    }
  }

  var myTesla = new Tesla(2022, "Plaid");
  console.log(myTesla);
// 7. **Story**:	As a programmer, I can make a Toyota car.
// - class Toyota inherits from class Car
// - create an object called myToyota which is a instance of class Toyota
// 8. **Story**: As a programmer, I can give my Toyota a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 9. **Story**: As a programmer, I can give my Toyota a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
  class Toyota extends Car{
    constructor(year, model){
      super(year, model)
      this.horsepower = 380
    }
  }

  var myToyota = new Toyota(2021, "Supra");
  console.log(myToyota);



// 10. **Story**:	As a programmer, I can make a Volkswagen car.
// - class Volkswagen inherits from class Car
// - create an object called myVolkswagen which is a instance of class Volkswagen
// 11. **Story**: As a programmer, I can give my Volkswagen a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 12. **Story**: As a programmer, I can give my Volkswagen a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
  class Volkswagen extends Car{
    constructor(year, model){
      super(year, model)
    }
  }

  var myVolkswagen = new Volkswagen(2015, "Beetle");
  console.log(myVolkswagen);




// 17. **Story**:	As a programmer, I can speed my Tesla up by 10 per acceleration.

// 18. **Story**:	As a programmer, I can slow my Tesla down by 7 per braking.

// 19. **Story**:	As a programmer, I can speed my Toyota up by 5 per acceleration.

// 20. **Story**:	As a programmer, I can slow my Toyota down by 2 per braking.

// 21. **Story**:	As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// 22. **Story**:	As a programmer, I can slow my Volkswagen down by 5 per braking.

// 23. **Story**:  As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
// - The method can be created in the parent class and accessed by all child classes