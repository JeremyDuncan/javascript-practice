// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// 1. Write the code that will log the outcome of 34 added to 71.
console.log(34+71);

// 2. Write the code that will log the outcome of 67 subtracted from 123.
console.log(123-67);

// 3. Write the code that will log the outcome of 56 multiplied by 23.
console.log(56*23);

// 4. Write the code that will log the outcome of 45 divided by 5.
console.log(45/5);

// 5. Write the code that will log the outcome of 5 to the power of 7.
console.log(5^7);

// 6. Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33%6);

// 7. Write the code that will log the length of a string containing your name.
var name = "Jeremy";
console.log(name.length);

// 8. Write the code that will log whether your string includes the letter "e"?
var result = "no \"e\" in string.";
for (i = 0; i < name.length; i++) {
  if (name[i] == "e") {
    result = "This string has an \"e\" in it.";
  } 
}
console.log(result);

// 9. Write the code that will log the character at the first index of the string.
console.log(name[0]);

// 10. Write the code that will log the string in all uppercase letters.
console.log(name.toUpperCase());


// === Write the code that will log true or false for the following: ===

// 11. Is 34 divided by 3 greater than 67 divided by 2?
result = ((34 / 3) > (67 / 2));
console.log(result);

// 12. Does 5 evaluate to the same as "5"?
result = (5 == "5");
console.log(result);

// 13. Does 5 strictly equal "5"?
result = (5 === "5");
console.log(result);

// 14. Does !3 strictly equal 3?
result = (!3 === 3);
console.log(result);

// 15. Does `"LEARN".length` strictly equal 5 AND `"Student".length` strictly equal 7?
result = ( ("LEARN".length === 5) && ("Student".length === 7) );
console.log(result);

// 16. Does `"LEARN".length` strictly equal 5 OR `"Student".length` strictly equal 10?
result = ( ("LEARN".length === 5) && ("Student".length === 10) );
console.log(result);

// 17. Does "LEARN" contain the subset `"RN"`?
result = ("LEARN".includes('RN'));
console.log(result);

// 18. Does "LEARN" contain the subset `"rn"`?
result = ("LEARN".includes('rn'));
console.log(result);

// 19. Does "LEARN"[0] strictly equal `"l"`?
result = ("LEARN"[0] === "l");
console.log(result);

// 20. Modify the code from the previous question to return `true`.
result = ("LEARN"[0] === "L");
console.log(result);

// Consider the variables:
// ```javascript
var theQuestion = "life, the universe, and everything"
var theAnswer = 42
// ```
// 21. Write the code that will log `theAnswer` divided by 2.
console.log(theAnswer/2);

// 22. Write the code that will log the length of `theQuestion`.
console.log(theQuestion.length);

// 23. Write the code that will log the index of the character `"f"` in the `theQuestion`.
console.log(theQuestion.indexOf('f'));

// 24. Write the code that will log the concatenation of the two variables.
console.log(theQuestion + theAnswer);

// 25. Write the code that will log "the universe".
result = "";
for (var i = theQuestion.indexOf("t"); i < 18; i++)
result += theQuestion[i];
console.log(result);

// 26. Write the code that will log the character `"l"` from `theQuestion`.
console.log(theQuestion[theQuestion.indexOf("l")]);

// 27. Write the code that will log whether `theQuestion.length` is greater than `theAnswer`.
result = (theQuestion.length > theAnswer);
console.log(result);
