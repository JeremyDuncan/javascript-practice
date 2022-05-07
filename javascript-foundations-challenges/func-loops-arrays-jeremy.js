// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.  
// **Don't forget to pseudo code.**

// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var multiplyByThree = (num) => {
  var result = [];
  for (var i = 0; i < num.length; i++) {
    result.push(num[i] * 3);
  }
  return result;
}

var testArr1 = [3, 9, 15, 4, 10];
var newArr = multiplyByThree(testArr1);
console.log(newArr);
// --> [9, 27, 45, 12, 30]

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
function getOdd(num) {
  var result = [];
  for (var i = 0; i < num.length; ++i) {
    if (num[i] % 2 != 0) {
      result.push(num[i]);
    }
  }
  return result;
}

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
var challenge2 = getOdd(testArr2);
console.log(challenge2);
// --> [-7, 3, 5, 13]

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** use the `typeof` method.
function filterLetters(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "string") {
      string += arr[i];
    }
  }
  return string;
}
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
var challenge3 = filterLetters(comboArr);
console.log(challenge3);
// --> "nicework"

// 4. Create a function that takes in an array of numbers and returns the sum.
var getSum = (num) => {
  var sum = 0;
  for (var i = 0; i < num.length; ++i) {
    sum += num[i];
  }
  return sum;
}

var addThese1 = [1, 2, 3, 4]
var challenge4 = getSum(addThese1);
console.log(challenge4);

// --> 10

var addThese2 = []
var challenge4_2 = getSum(addThese2);
console.log(challenge4_2);
// --> 0

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
function getIndexOfLargest(num) {
  var largest = 0;
  for (var i = 0; i < num.length; ++i) {
    if (largest < num[i]) {
      largest = num[i];
    }
  }

  return num.indexOf(largest);
}

var indexHighestNumber = [1, 4, 2, 3]
var challenge5 = getIndexOfLargest(indexHighestNumber)
console.log(challenge5);
// --> 1

// **STRETCH Challenges**
// 1. Create a function that takes in two arrays and returns one array with no duplicate values.
function combineArrays(arr1, arr2) {
  var newArr = [];
  var resultArr = [];

  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }

  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  for (var i = 0; i < newArr.length; i++) {
    if (resultArr.indexOf(newArr[i]) == -1) {
      resultArr.push(newArr[i]);
    }
  }

  return resultArr;
}

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
var stretchChallenge1 = combineArrays(arr1, arr2);
console.log(stretchChallenge1);
// --> [3, 7, 10, 5, 4, 8, 2, 1]

// 2. Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var stretchChallenge2 = (arrayLength, arrayValue) => {
  var array = [];
  for (var i = 0; i < arrayLength; i++) {
    array.push(arrayValue);
  }
  return array;
}

console.log(stretchChallenge2(6,0));
console.log(stretchChallenge2(4,11))

// 3. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

var addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// --> 10

var addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// --> 55

var addUp3 = 600
// --> 180300


// **EPIC Challenges**
// - Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".

//var input = prompt("Guess a number between 1 and 100.");
  function highLow(num) {
    var answer = 67;
    if (num == answer) {
      console.log("Thats correct! You Win!");
      return true;
    } else if (num > answer) {
      console.log("You guessed too high a number!");
      return false;
    } else {
      console.log("You guessed too low a number!");
      return false;
    } 
  }

  function game() {
    var input = 0;
    var tries = 0;
    for (var gameWon = false; gameWon == false;) {
      input = prompt("Guess a number between 1 and 100.");
      gameWon = highLow(input);
      tries += 1;
      console.log(tries);
      if (tries === 7) {
        console.log("Too many Tries! Game Over!")
        break;
      }
    }
  }

  game();
// - Create an HTML page and link your JavaScript file. More info [here](../tools-and-resources/linking-html-javascript.md).
// - As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// - As a user, I can see if my guess is too high or too low.
// - As a user, if I guess the "answer" correctly I am notified that I won.
// - As a user, I can continue to guess the "answer" until I am correct.
// - STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
  