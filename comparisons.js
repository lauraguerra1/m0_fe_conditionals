// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log(numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log(numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log(numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log(numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: This will log the result of the comparison, is 4 less than 9, to the console. We should 
// expect this to return "true". 

var books = 3;
console.log(4 < books);
// YOU DO: This will log the result of the comparison, is 4 less than books, to the console. We
// should expect this to return "false". 

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: This will log the result of the comparison, is friends greater than siblings, to the 
// console. We should expect this to return "true". 

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: This will log the result of the comparison, is attendees not equal meals, to the  console. 
// We should expect this to return "true". 


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);


// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);


// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: I used the condition, age is less than or equal to one, to represent whether the dog is a puppy. 
// My final line evaluates to true because the dog meets both the requirements of  my comparison. 
// The dog loves to play and the age is less than or equal to one.
// Another solution (listed below) would be to declare a new variable, isPuppy, and use that instead of age <= 1. 
var isPuppy = true; 
console.log(lovesToPlay && isPuppy); 