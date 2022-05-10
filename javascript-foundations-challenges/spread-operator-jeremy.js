## Challenges

#### Exercise 1

Consider this function:

```javascript
function combineArrays(arrOne, arrTwo) {
  return arrOne.concat(arrTwo)
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))
```

Refactor this function to use the spread operator to combine the arrays.

#### Exercise 2

Consider this function:

```javascript
function combineAndFilterOdd(arrOne, arrTwo, arrThree){
  return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
```

Refactor this function to use the spread operator to combine the array arguments.

**STRETCH**

Recall the **combineAndFilterOdd()** function from the previous exercise. Refactor the function to take any number of arguments.
