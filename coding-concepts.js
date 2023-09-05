// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10. It will log the length of the string.
// b) Verify and explain:My answer is correct. It will log the length of the constant <cohort> that represents "LEARN 2023".

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o. It should output the letter o.
// b) Verify and explain: This is because it is asking for the value at the index of 4. Starting with zero, you can count off the letters in the string until you get to "o".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:It should log Ruby, because the constant <index> is set at 1, it will return the second item in the index of the array, "RUby".
// b) Verify and explain: It returns the item, "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY, SUNDAY. It will change the strings "saturday" and "sunday" to capital letters.
// b) Verify and explain: Upon verifying, I am getting ann error code that says "toUpperCase is not a function". so I believe it may be a trick question.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer:I'm not sure what typeof is supposed to represent without it being previously being declared.
// b) Verify and explain: It gave me back "number". WIthout "typeof", it gives me "4" as expected. I'm thinking typeof is giving me the tpe of the value for dataTypes.length, which is indeed a number--4. So this will log the datatype of the value preceding it, which is a number because it is a ".length".
