/*
var userName = "Hunter Viner";
const user_age = 25;
let isLoggedIn = true;
console.log(userName + " is " + user_age + " years old.");
let firstName = userName.slice(0, 6);
let lastName = userName.slice(7, 12);
console.log(firstName + " " + lastName);

//Runescape Mining Challenge:

//Level 1 - Copper
//Level 10 - Iron
//Level 30 - Mithril
//Level 40 - Admantite
//Level 50 - Runite
//Over Level 50 - Other Ores

//For each output, console.log "At level ___, you can mine ___."

//Use if, else-if, else
let level = 0;

if (level < 1) {
  console.log("You cant mine anything");
} else if (level <= 9) {
  console.log("You can mine Copper");
} else if (level <= 29) {
  console.log("You can mine Iron");
} else if (level <= 39) {
  console.log("You can mine Mithril");
} else if (level <= 49) {
  console.log("You can mine Adamanite");
} else if (level <= 100) {
  console.log("You can mine Other ores");
}
// Elon's Tesla Self Driving Car Challenge:

// Determine if a car can go forward or not
// Boolean Variable - A car can go forward if there are no pedestians
// Number Variable - A car can go forward if gas tank is more than 0.5 (0.0 - 1.0) Use Math.random()
// string Variable - A car can go forward if the light is green
// string Variable - A car can go forward if the light is orange
// string Variable - A car can not go forward if the light is red

// Output "Car drives forward." or "Car remains stationary." for each condition.

//Use if, else-if, else, &&, ||, and nested statements

var pedestrian = true;
var lightColor = "orange";
let gasTank = 0.5;

if (
  pedestrian === false &&
  (lightColor === "green" || lightColor === "orange") &&
  gasTank > 0.5
) {
  console.log("Car moves forward");
} else if (pedestrian === true || lightColor === "red" || gasTank < 0.5) {
  console.log("car remains stationary");
}


// Coding Exercise 25:
const lottoNumbers = [0, 1, 2, 3, 4, 5];

// Coding Exercise 26:
leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
leaderboard[1] = "Luna";
leaderboard.pop();
leaderboard.push("Draco");

// Coding Exercise 26:
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
planets.shift();
planets.unshift("Mercury");
planets.push("Saturn");
console.log(planets);

// Coding Exercise 27:
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);

// Coding Exercise 29:
const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "blueberry"]
};

// Coding Exercise 30:
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

const fullAddress =
  true +
  restaurant.address +
  " " +
  restaurant.city +
  " " +
  restaurant.state +
  " " +
  restaurant.zipcode;
console.log(fullAddress);

//coding exercise 31:
let text = "Da ba dee da ba daa";
for (let i = 0; i < 6; i++) {
  console.log(text);
}

// Coding Exercise 32:
for (let i = 25; i > -1; i -= 5) {
  console.log(i);
}

//Coding Exercise 33:
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

//Coding Exercise 34:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
  let newNum = num * num; // creating a new variable to store the numbers
  console.log(newNum);
}

// Coding Exercise 35:
function printHeart() {
  console.log("<3");
}
printHeart();

// Coding Exercise 36:
function rant(message) {
  let phrase = "I hate " + message;
  console.log(phrase.toUpperCase());
  console.log(phrase.toUpperCase());
  console.log(phrase.toUpperCase());
}

rant("beets");

//Coding Exercise 37:
function isSnakeEyes(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

// Coding Exercise 38:
function multiply(num1, num2) {
  return num1 * num2;
}

//var storedValue = multiply(2, 3);
//console.log(storedValue);

// Coding Exercise 39:
function isShortsWeather(num) {
  if (num >= 75) {
    return true;
  } else {
    return false;
  }
}

// Coding Exercise 40:
function lastElement(elements) {
  let index = elements[elements.length - 1];
  if (index > 0) {
    return index;
  } else {
    return null;
  }
}
console.log(lastElement([1, 2, 3, 4, 5, 6]));
*/
