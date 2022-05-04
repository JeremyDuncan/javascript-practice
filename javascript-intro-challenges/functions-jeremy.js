// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// 1. Write a function named `marco` that returns "polo".
  function Marco() {
    return console.log("polo")
  }

  Marco();

// 2. Write a function named `greeting` that takes a name as an argument and returns "Welcome, <person's name here>!"
  function Greeting(name) {
    return console.log("Welcome "+ name);
  }

  Greeting("Jeremy");

// 3. Write a function named `oddOrEven` that takes a number as an argument and returns whether the number is odd or even.
  function oddOrEven(number) {
    result = "";
    if (number % 2 === 0) {
      result = "Even"
    } else {
      result = "Odd"
    }
    return console.log(result);
  }

  oddOrEven(10);
  oddOrEven(1);

// 4. Write a function named `triple` that takes a number as an argument and returns the result of that number multiplied by 3.
  function triple(number) {
    return console.log(number * 3);
  }

  triple(5);

// 5. Write a function named `multiply` that takes two numbers as arguments and returns the result of the numbers multiplied together.
  function multiply(num1, num2) {
    return console.log(num1 * num2);
  }

  multiply(5, 5);

// 6. Write a function named `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
  function divisibleBy(num1, num2) {
    if ( num1 % num2 === 0) {
      return console.log(num1 + " is evenly divisible by " + num2);
    } else {
      return console.log(num1 + " is not evenly divisible by " + num2);
    }
  }

  divisibleBy(5, 5);
  divisibleBy(5, 15);

// 7. Write a function named `assignGrade` that takes a number score as an argument and returns the letter grade for the score.
  function assignGrade(score) {
    if (score === 100) {
      return console.log("perfect score");
    } else if ( score < 100 && score >89) {
      return console.log("score = A");
    } else if ( score < 90 && score >79) {
      return console.log("score = B");
    } else if ( score < 80 && score >69) {
      return console.log("score = C");
    } else if ( score < 70 && score >59) {
      return console.log("score = D");
    } else if ( score < 60 &&  score != 0) {
      return console.log("score = F");
    } else {
      return console.log("no score available");
    }
  }

  assignGrade(89);

// 8. Write a function named `isLonger` that takes two strings as arguments and returns the string that contains the most characters.
  function isLonger(string1, string2) {

  }

// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.
  function greaterNum(num1, num2) {
    if (num1 > num2) {
      return console.log(num1 + " is higher.")
    } else {
      return console.log(num2 + " is higher.")
    }
  }

  greaterNum(5, 6);
  greaterNum(1000, 10);

// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.
  function yelling(string) {
    console.log(string.toUpperCase());
  }

  yelling("hello");

// ### STRETCH Challenges

// 1. The World Translator   
  // (a) Write a function named `helloWorld` that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.  
  // (b) Have your function [default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to returning English.
  function helloWorld(languageCode) {
    if (languageCode === "en") {
      console.log("Hello World!")
    } else if (languageCode === " ## ") {
      console.log(" ### ")
    } else if (languageCode === " ## ") {
      console.log(" ### ")
    }  else if (languageCode === " ## ") {
      console.log(" ### ")
    } else if (languageCode === " ## ") {
      console.log(" ### ")
    }
  }

  helloWorld("en");
  helloWorld(" ");

// 2. The Pluralizer  
 //  (a) Write a function named `pluralizer` that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
  function pluralizer(number, noun) {
    
  }

  pluralizer(5, "cat")
  // expected output: "5 cats"

  //pluralizer(1, "dog")
  // expected output: "1 dog"
  // ```

  // (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".