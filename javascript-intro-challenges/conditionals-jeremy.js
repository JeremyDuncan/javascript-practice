// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// 1. Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100
if (item <= 100) {
  console.log("in budget");
}

// . Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true;
if (hungry == true){
  console.log("eat food")
} else {
  console.log("keep coding");
}

// 3. Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green";

if (trafficLight == "green") {
  console.log("go");
} else if (trafficLight == "yellow") {
  console.log("slow down");
} else if (trafficLight == "red"){
  console.log("stop");
}

// 4. Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 12;
var num2 = 12;

if (num1 > num2) {
  console.log(num1 + " is larger.");
} else if (num1 < num2) {
  console.log(num1 + " is smaller."); 
} else{
  console.log("the numbers are the same");
}

// 5. Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 1;

if(number === 0) {
  console.log("zero")
} else if ((number % 2 == 0) && (number != 0)) {
  console.log("even")
} else if ( number % 2 != 0) {
  console.log("odd");
}

// ### STRETCH Challenges

// 6. Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 100

if (grade === 100) {
  console.log("perfect score");
} else if ( grade < 100 && grade >89) {
  console.log("Grade = A");
} else if ( grade < 90 && grade >79) {
  console.log("Grade = B");
} else if ( grade < 80 && grade >69) {
  console.log("Grade = C");
} else if ( grade < 70 && grade >59) {
  console.log("Grade = D");
} else if ( grade < 60 &&  grade != 0) {
  console.log("Grade = F");
} else {
  console.log("no grade available");
}

// 7. Write a statement that takes a variable of a boolean, number, or string  data type and logs the data type of the variable. **HINT**: Check out the [JavaScript typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
var BOOL = true;
var NUMBER = 5;
var STRING = "string";

console.log(typeof(BOOL));
console.log(typeof(NUMBER));
console.log(typeof(STRING));

// 8. Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes `!`, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "shghfghfghfghfgs";

if (password.length > 12 && password.indexOf("!") != -1) {
  console.log("Thats a mighty strong password!");
} else if (password.length > 8 || password.indexOf("!") != -1){
  console.log("That password is strong enough");
} else {
  console.log("That is not a valid input");
}