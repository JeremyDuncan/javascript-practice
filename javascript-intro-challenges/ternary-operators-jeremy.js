// ## Challenges
// - Create a function that determines if a user is old enough to vote (age 18 or older).
  var votingAge = (age) => {
    return age > 17 ? console.log("You are old enough to vote.") : console.log("You are not old enough to vote.")
  }
  votingAge(12);

// - Create a function that takes in an array of numbers and determines if the number is odd or even.
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 45];

  var oddsOrEvens = (num) => {
    for (var i = 0; i < num.length; i++) {
      num[i] % 2 == 0 ? console.log(`${num[i]} is even.`) : console.log(`${num[i]} is not even`)
    }
  }

  oddsOrEvens(numbers);