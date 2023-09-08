// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code: Make a function that will tell you if a temperature number is above, at, or below boiling point.
//input: a function called boilingPoint
//output: <temperature> is below boiling point. <temperature> is at boiling point. <temperature> is above boiliing point.
//process: function expression with an input.
// const boilingPoint = (temperature) => {
//     if (temperature < 212){
//         return (`${temperature} is below boiling point.`)
//     }   
//     else if (temperature === 212){
//         return (`${temperature} is at boiling point.`)
//     }
//     else if (temperature > 212){
//         return (`${temperature} is above boiling point.`)
//     }
// }   
// console.log(boilingPoint(temperature1))
// console.log(boilingPoint(temperature2))
// console.log(boilingPoint(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: Make the code that is going to combine the arrays given and then return the length.
//Input:<padres1984WorldSeriesRuns> <padres1998WorldSeriesRuns>
//Output:<arrayLength)
//Process: function expression with multiple parameters.

// const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// const combinedLength = combinedRuns.length
// console.log(combinedLength)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code: Write the code that is going to split the string into an array, then reverse it, and then put it back into a string.
//Input: a function named <reverseString>.
//Output: <currentCohort> reversed
//process: 

const reversedCohort = currentCohort.split('').reverse().join('')
console.log(reversedCohort)
//I am getting back error messages. 
//const lastIndexValue = numberOfConnections.lastIndexOf(
                                                       
// SyntaxError: Unexpected end of input
// at internalCompileFunction (node:internal/vm:73:18)
// at wrapSafe (node:internal/modules/cjs/loader:1178:20)
// at Module._compile (node:internal/modules/cjs/loader:1220:27)
// at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
// at Module.load (node:internal/modules/cjs/loader:1119:32)
// at Module._load (node:internal/modules/cjs/loader:960:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code: Make the code that will give back the last iindex of the given test values from the given array.
//Input: <lastIndexValueOfArray>
//Output: The last index of the value given from the array above.
//Process:

const lastIndexValue = numberOfConnections.lastIndexOf(