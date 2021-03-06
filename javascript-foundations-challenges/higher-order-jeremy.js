// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use `.map()` or `.filter()` to complete all of the following exercises.   
// **Don't forget to pseudo code.**

// 1. Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
  var arr1 = [3, 9, 15, 4, 10]

  const multiplier = (array) => {
    return array.map(value => value * 10)
  }
  console.log(multiplier(arr1))
  // --> [30, 90, 150, 40, 100]

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
  var arr2 = [2, 7, 3, 5, 8, 10, 13]

  var getOdd = (array) => {
    return array.filter(value => value % 2 != 0)
  }
  console.log(getOdd(arr2));
  // --> [7, 3, 5, 13]

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** Use [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) method
  var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

  var getString = (array) => {
    return array.filter(value => typeof(value) === "string").join("");
  }
  console.log(getString(comboArr));
  // --> "nicework"

// 4. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

var getTruthy = (array) => {
  return array.filter(value => value != null && value != " " || value > 0 || value == true );
}

console.log(getTruthy(filterArrayValues));
// --> [58, "abcd", true]

// **STRETCH Challenges**
// 1. Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome";

var removeVowels = (string) => {
  var array = [];

  for (var i = 0; i < string.length; i++) {
    array.push(string[i]);
  }

  return array.filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u").join("");
}
// value != "a" && value != "e" && value != "i"
console.log(removeVowels(str));
// --> "jvscrpt s wsm"

// 2. Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3];
var arr2 = [7, 8, 2, 1, 5, 4];

var combineArr = arr1.concat(arr2.filter((value) => arr1.indexOf(value) < 0));

console.log(combineArr);
// --> [3, 7, 10, 5, 4, 8, 2, 1]