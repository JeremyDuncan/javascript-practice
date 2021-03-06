// ### Challenges

// **Consider this variable:**
  const person = {
    firstName: "Arthur",
    lastName: "Dent"
  }
// - Write the code that accesses the first name of the person object.
  console.log(person.firstName);

// - Write the code that accesses the last name of the person object.
  console.log(person.lastName);

// - Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
  person.homePlanet = "Earth";
  console.log(person.homePlanet);

// - Update the person object with a method that logs "Arthur Dent is from planet Earth".
  person.displayData = displayData = () => {
    return `${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`;
  } 

  console.log(person.displayData());

// **Consider this variable:**
  const product = {
    name: "chair",
    price: 24.99
  }
// - Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
  function describeProduct(productObject) {
    var product = productObject.name;
    var price = productObject.price;
    return `The product is a ${product}. It costs ${price}.`
  }

  console.log(describeProduct(product));

// - Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
  var totalWithTax = (obj) => {
    var name = obj.name;
    var price = obj.price;
    var tax = .07;

    return `The total cost of ${name} is ${(price + (price * tax)).toFixed(2)}`;
  }

  console.log(totalWithTax(product));

// **Consider this variable:**
  const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }
// - Write the code that accesses the ingredients property.
  console.log(lunch.ingredients);

// - Write the code that access the third ingredient of the lunch object.
  var thirdIngredient = lunch.ingredients[2];
  console.log(thirdIngredient);

// - Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  var announceIngredients = (obj) => {
    var name = obj.name;
    var type = obj.type;
    var ingredients = obj.ingredients;

    return `The ingredients for a ${name} ${type} are ${ingredients[0]}, ${ingredients[1]}, and ${ingredients[2]}.`;
  } 

  console.log(announceIngredients(lunch));

// - Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  lunch.announce = () => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`;
  }

  console.log(lunch.announce());

// **Consider this variable:**
  const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]
// - Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
  var getCats = (creatures) => {
    return creatures.filter(animal => animal.type === "cat");
  }
  
  console.log(getCats(animals));

// - Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
  var getAnimalNames = (creatures) => {
    var resultsObj = [];
    for (var i = 0; i < creatures.length; ++i) {
      resultsObj.push(creatures[i].name);
    }
    return resultsObj;
  }
  var animalNames = getAnimalNames(animals);
  console.log(animalNames); // [ "Waffles, "Fluffy", "Spelunky", "Hank" ]

// - Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
  var getOlderAnimals = (creatures) => {
    var overTen = [];
    for (var i = 0; i < creatures.length; ++i) {
      creatures[i].age > 10 ? overTen.push(creatures[i].name) : null;
    }
    return overTen;
  }

  var animalsOverTen = getOlderAnimals(animals);
  console.log(animalsOverTen); // [ "Fluffy", "Hank" ]

// - Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
  var animalDetails = (creatures) => {
    var animalInfo = [];
    for (var i = 0; i < creatures.length; ++i) {
      animalInfo.push(`${creatures[i].name} is a ${creatures[i].type} that is ${creatures[i].age} years old.`)
    }
    return animalInfo;
  }
  // "Waffles is a dog that is 7 years old", etc...
  console.log(animalDetails(animals));

// **Consider this variable:**
  const author = {
    name: "H. G. Wells",
    genre: "science fiction"
  }
// - Write the code that destructures the author object so that the following code snippet will run successfully:
  const { name, genre } = author;
  console.log(`${name} is a ${genre} author`); // Output: "H. G. Wells is a science fiction author"

// **Consider this variable:**
  const pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
  }

  const pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
  }

  var describePokemon = (pokemon) => {
    var { species, pokemon_type } = pokemon;
    return `${species} is a ${pokemon_type} pokemon.`; 
  }
// - Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
  console.log(describePokemon(pokeOne))
// Output: "Charmandar is a Fire pokemon"
  console.log(describePokemon(pokeTwo))
// Output: "Magikarp is a Water pokemon"

// **Consider this variable:**
const triangleDimensions = {
  base: 2,
  height: 5
}
// - Modify the triangleDimensions object to have a method that returns the area of the triangle.
  triangleDimensions.getArea = () => {
    var {base, height} = triangleDimensions;
    return 0.5 * (base * height);
  }
  console.log(triangleDimensions.getArea());

// - Write the code that will update the base to be the value of 6.
  triangleDimensions.base = 6;
  console.log(triangleDimensions.base);

// **Consider this variable:**
  var learn = {
    cohorts: {
      "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
      "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
    }
  }
// - Write the code that logs the name of your cohort.
  console.log(learn.cohorts[2022][3]); // "Delta"

// - Write the code that uses destructuring to log the name of your cohort.
  var {cohorts: 
        {"2022": 
          [
            alpha, 
            bravo, 
            charlie, 
            delta
          ]
        }
      } = learn;
  //var {cohorts: {"2022": [alpha, bravo, charlie, delta]}} = learn;
  console.log(delta); // "Delta"

// - Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
    var getCohort = (obj) => {
      var result = [];      
      for (value in obj.cohorts) {
        for (var i = 0; i < obj.cohorts[value].length; i++) {
          result.push(`${value} ${obj.cohorts[value][i]}`)
        }
      }
      return result;
    }
    console.log(getCohort(learn));
// Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]