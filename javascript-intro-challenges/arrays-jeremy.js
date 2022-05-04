// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// === Consider the variable: ===
var groceryList = ["chips", "dip", "cookies"]

  // 1. Write the code that will add "soda" to the end of the original array.
  groceryList.push("soda");
  console.log(groceryList);

  // 2. Write the code that will add "granola" to the end of array without altering the original array.
  const el = "granola";
  const newArray = [...groceryList, el];
  console.log(newArray);

  // 3. Write the code that will return a subset of the array containing only "chips" and "dip".
  var resultArr = [];
  for (var i = 0; i < groceryList.length; ++i) {
    if (groceryList[i] === "chips" || groceryList[i] === "dip") {
      resultArr.push(groceryList[i]);
    }
  }
  console.log(resultArr);

  // 4. Write the code that will add "beans" to the "chips" and "dip" array.
  resultArr.push("beans");
  console.log(resultArr);

//  === Consider the variable: ===
var numbers = [2, 4, 6, 8, 10]

  // 5. Write the code that will add the number 0 to the beginning of the array.
  numbers.unshift(0);
  console.log(numbers);

  // 6. Write the code that will add the number 12 to the end of the array.
  numbers.push(12);
  console.log(numbers);

  // 7. Write the code that will remove the first number from the array.
  numbers.shift();
  console.log(numbers);

  // 8. Write the code that will add the number 0 to the beginning of the array without altering the original array. **HINT**: it's not `.unshift` You'll have to get creative! ;)
  var newArr = [0 ,...numbers];
  console.log(newArr);

// Consider the variable:
var numSet = [2, 13, 6, 8, 4, 2]

  // 9. Write the code that finds the index of the first appearance of the number 2.
  console.log(numSet.indexOf(2));

  // 10. Write the code that finds the index of the last appearance of the number 2.
  console.log(numSet.lastIndexOf(2));

  // 11. Write the code that returns the number at the third index.
  console.log(numSet[2]);

  //  === Consider the variable: ===
  var characters = ["y", "a", "r", "r", "a"]

  // 12. Write the code that brings all the letters in the characters array together into a string
  const arrayString = characters.join("");
  console.log(arrayString);

  // 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
  const charsReversed = characters.reverse();
  console.log(charsReversed);

  // 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
  const arrayReverseString = charsReversed.join("*");
  console.log(arrayReverseString);

  // 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.
  const joinedReverse = charsReversed.join("");
  console.log(joinedReverse);

  // Create two arrays consisting of three first names of your cohort members in each.
  var cohortMembers1 = ["Alissa", "John", "Bobby"];
  var cohortMembers2 = ["Cathy", "Karen", "Jason"];

  // 16. Write the code that sorts the names in alphabetical order.
  cohortMembers1.sort();
  cohortMembers2.sort();
  console.log(cohortMembers1);
  console.log(cohortMembers2);

  // 17. Write the code that sorts the names in reverse alphabetical order.
  cohortMembers1.reverse();
  cohortMembers2.reverse();
  console.log(cohortMembers1);
  console.log(cohortMembers2);

  // 18. Write the code that sorts all the names in alphabetical order in a single array.
  var combinedCohortMembers = cohortMembers1.concat(cohortMembers2);
  combinedCohortMembers.sort();
  console.log(combinedCohortMembers);

// Consider the variables: 
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

  // 19. Write the code that logs the values from the numbers array that are at odd indexes.
  for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] % 2 != 0) {
      console.log(numbers[i]);
    }
  }

  // 20. Write the code that adds the values from odd indexes into the oddIndexes array.
  for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] % 2 != 0) {
      oddIndexes.push(numbers[i]);
    }
  }
  console.log(oddIndexes);