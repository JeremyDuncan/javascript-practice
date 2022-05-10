// ## Challenges
// #### Exercise 1
// Consider this function:
function combineArrays(arrOne, arrTwo) {
  return arrOne.concat(arrTwo)
}
console.log(combineArrays([2, 4, 2], [4, 6, 11]))

// Refactor this function to use the spread operator to combine the arrays.
var arr1 = [2, 4, 2];
var arr2 = [4, 6, 11];
var combinedArr = [...arr1, ...arr2]
console.log(combinedArr);

// #### Exercise 2
// Consider this function:
  function combineAndFilterOdd(arrOne, arrTwo, arrThree){
    return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 !== 0);
  }
  console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]));

// Refactor this function to use the spread operator to combine the array arguments.
var arr1 = [3, 2, 5]; var arr2 =  [5, 8, 7]; var arr3 = [4, 5, 6];
var combinedArr = [...arr1, ...arr2, ...arr3]; 
console.log(combinedArr.filter(num => num % 2 !== 0));

// **STRETCH**
// Recall the **combineAndFilterOdd()** function from the previous exercise. Refactor the function to take any number of arguments.
function combineAndFilterOdd(...arr){
  var combined = [...arr];
  var result = [];
  for (var i = 0; i < combined.length; i++) {
    for (var j = 0; j < combined[i].length; j++) {
      result.push(combined[i][j])
    }
  }
  return result.filter(num => num % 2 !== 0);
}
console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]));