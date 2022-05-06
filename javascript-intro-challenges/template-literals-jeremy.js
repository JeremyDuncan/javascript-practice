// ## Challenges

// #### Exercise 1
// Consider this variable:

  var meaningOfLife = 42

// Write the code that prints '**The answer to the meaning of life is 42**'.
  console.log(`**The answer to the meaning of life is ${meaningOfLife}**`);

// #### Exercise 2
// Consider this code:
  var zooAnimals = ['giraffe', 'fennec fox', 'elephant']
  zooAnimals.forEach(animal =>  console.log('The zoo has a ' + animal))
  // Refactor the .forEach method to use string interpolation.
  zooAnimals.forEach(animal => console.log(`The zoo has a ${animal}.`));

// #### Exercise 3
// Consider this variable:
  var burger = {
      cheese: 'cheddar',
      patty: 'black bean',
      onions: false,
  }
  // Write the code that prints '**black bean burger with cheddar**' to the screen.
  console.log(`**${burger.patty} burger with ${burger.cheese}**`)

// **STRETCH**

// Given these 2 burger objects:
  var beanBurger = {
      cheese: 'cheddar',
      patty: 'black bean',
      onions: false,
  }

  var turkeyBurger = {
      cheese: 'swiss',
      patty: 'turkey',
      onions: true,
  }
// Write a function takes a burger object and returns a descriptive string.
  function getBurger(burgerType) {
    var burger = burgerType;
    if (burger.onions === true) {
      return console.log(`**${burger.patty} burger with ${burger.cheese} and onions**`)
    } else {
      return console.log(`**${burger.patty} burger with ${burger.cheese} and no onions**`)
    }
    console.log(`**${burger.patty} burger with ${burger.cheese}**`)
  }

  getBurger(turkeyBurger);
  getBurger(beanBurger);

