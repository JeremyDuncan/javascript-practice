// ## Challenges
// > **IMPORTANT**: Write the test FIRST, see it fail, then write the code to make it PASS.
// > **IMPORTANT**: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.  
  // - Write the function that will make the test pass.
  describe("areYouTired", () => {
    it("returns drink coffee or keep working based on input", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })

  var areYouTired = (input) => {
    if (input === "yes") {
      return "drink coffee";
    } else {
      return "keep working";
    }
  }
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
  // - Write the function that will make the test pass.
    describe("areYouStressed", () => {
      it("returns relax or keep going based on input", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
      })
    })

    var areYouStressed = (input) => {
      if (input === "yes") {
        return "relax";
      } else {
        return "keep going";
      } 
    }

// 3. Write the test for a function that returns "In budget" if a price is lower than $300.  
  // - Write the function that will make the test pass.
    describe("getBudget", () => {
      it("returns 'in budget' if price is lower than $300", () => {
        expect(getBudget(500)).toEqual("Not in budget")
        expect(getBudget(100)).toEqual("In budget")
      })
    })

    var getBudget = (price) => {
      if (price <= 300) {
        return "In budget";
      } else {
        return "Not in budget"
      }
    }

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
  // - Write the function that will make the test pass.
    describe("determineSmaller", () => {
      it("returns smaller number", () => {
        expect(determineSmaller(10,5)).toEqual(5)
        expect(determineSmaller(44,99)).toEqual(44)
        expect(determineSmaller(1,10000)).toEqual(1)
      })
    })

    var determineSmaller = (num1, num2) => {
      return num1 < num2 ? num1 : num2;
    }

// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
  // - Write the function that will make the test pass.
    describe("oddNumberDetector", () => {
      it("returns wehter the number is odd", () => {
        expect(oddNumberDetector(1)).toEqual("1 is Odd.")
        expect(oddNumberDetector(2)).toEqual("2 is not Odd.")
      })
    })

    var oddNumberDetector = (number) => {
      return number % 2 == 0 ? `${number} is not Odd.` : `${number} is Odd.`;
    }

// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
  // - Write the function that will make the test pass.
    describe("getFruitColor", () => {
      it("returns color of fruit.", () => {
        expect(getFruitColor("banana")).toEqual("yellow")
        expect(getFruitColor("grape")).toEqual("purple")
        expect(getFruitColor("apple")).toEqual("red")
      })
    })

    var getFruitColor = (fruit) => {
      var color = "";
      if (fruit == "banana") {
        color = "yellow";
      } else if (fruit == "grape") {
        color = "purple";
      } else if (fruit == "apple") {
        color = "red";
      }
      return color
    }

// 7. Write the test for a function called `rick` that returns "Morty".
  // - Write the function that will make the test pass.
    describe("rick", () => {
      it("returns Morty.", () => {
        expect(rick()).toEqual("Morty")
      })
    })

    var rick = () => {return "Morty";}

// 8. Write the test for a function called `greeter` that takes a name as an argument and returns a greeting with that name to the screen.
  // - Write the function that will make the test pass.
    describe("greeter", () => {
      it("Takes a name and returns a greeting with that name on the screen.", () => {
        expect(greeter("John")).toEqual("Welcome John!")
        expect(greeter("Mary")).toEqual("Welcome Mary!")
      })
    })

    var greeter = (name) => {
      return `Welcome ${name}!`;
    }

// 9. Write the test for a function called `oddOrEven` that takes a number as an argument and logs whether the number is odd or even.
  // - Write the function that will make the test pass.
    describe("oddOrEven", () => {
      it("Takes a number and logs whether the number is odd or even.", () => {
        expect(oddOrEven(88)).toEqual("88 is even.")
        expect(oddOrEven(133)).toEqual("133 is odd.")
      })
    })

    var oddOrEven = (number) => {
      return number % 2 == 0 ? `${number} is even.` : `${number} is odd.`;
    }

// 10. Write the test for a function called `doubler` that takes a number and returns the result of the number multiplied by 2.
  // - Write the function that will make the test pass.
    describe("doubler", () => {
      it("returns number multiplied by 2.", () => {
        expect(doubler(100)).toEqual(200)
        expect(doubler(12345678)).toEqual(24691356)
      })
    })

    var doubler = (number) => {return number * 2;}

// 11. Write the test for a function called `multiply` that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
  // - Write the function that will make the test pass.
    describe("multiply", () => {
      it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
        expect(multiply(10, 2)).toEqual(20)
        expect(multiply(123, 123)).toEqual(15129)
      })
    })

    var multiply = (num1, num2) => {return num1 * num2;}

// 12. Write the test for a function called `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
  // - Write the function that will make the test pass.

// 13. Write the test for a function called `fizzbuzz`. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
  //  - Write the function that will make the test pass.