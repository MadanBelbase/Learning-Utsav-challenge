 
 // undefind


// let firstName
// console.log(firstName) //not defined, because it is not assigned to a value yet

//Null

// let empty = null
// console.log(empty) // -> null , means no value


//Operators

// const PI = 3.14
// let radius = 100          // length in meter

// //Let us calculate area of a circle
// const areaOfCircle = PI * radius * radius
// console.log(areaOfCircle)  //  314 m


// const gravity = 9.81      // in m/s2
// let mass = 72             // in Kilogram

// // Let us calculate weight of an object
// const weight = mass * gravity
// console.log(weight)        // 706.32 N(Newton)

// const boilingPoint = 100  // temperature in oC, boiling point of water
// const bodyTemp = 37       // body temperature in oC
// console.log(
//   `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
// )

//Comparison Operators

// console.log(3 > 2)              // true, because 3 is greater than 2
// console.log(3 >= 2)             // true, because 3 is greater than 2
// console.log(3 < 2)              // false,  because 3 is greater than 2
// console.log(2 < 3)              // true, because 2 is less than 3
// console.log(2 <= 3)             // true, because 2 is less than 3
// console.log(3 == 2)             // false, because 3 is not equal to 2
// console.log(3 != 2)             // true, because 3 is not equal to 2
// console.log(3 == '3')           // true, compare only value
// console.log(3 === '3')          // false, compare both value and data type
// console.log(3 !== '3')          // true, compare both value and data type
// console.log(3 != 3)             // false, compare only value
// console.log(3 !== 3)            // false, compare both value and data type
// console.log(0 == false)         // true, equivalent
// console.log(0 === false)        // false, not exactly the same
// console.log(0 == '')            // true, equivalent
// console.log(0 == ' ')           // true, equivalent
// console.log(0 === '')           // false, not exactly the same
// console.log(1 == true)          // true, equivalent
// console.log(1 === true)         // false, not exactly the same
// console.log(undefined == null)  // true
// console.log(undefined === null) // false
// console.log(NaN == NaN)         // false, not equal
// console.log(NaN === NaN)        // false
// console.log(typeof NaN)         // number

// console.log('mango'.length == 'avocado'.length)  // false
// console.log('mango'.length != 'avocado'.length)  // true
// console.log('mango'.length < 'avocado'.length)   // true
// console.log('milk'.length == 'meat'.length)      // true
// console.log('milk'.length != 'meat'.length)      // false
// console.log('tomato'.length == 'potato'.length)  // true
// console.log('python'.length > 'dragon'.length)   // false

//Logical Operators

// / && ampersand operator example

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

// //! Negation examples

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

//Increment Operator
//Pre-increment
// let count = 0
// console.log(++count)        // 1
// console.log(count)    

//Post-increment

// let count = 0
// console.log(count++)        // 0
// console.log(count) 


//Decrement Operator
//Pre-decrement
// let count = 0
// console.log(--count) // -1
// console.log(count)  // -1

//Post-decrement
//let count = 0
// console.log(count--) // 0
// console.log(count)   // -1


//Ternary 
// let number = 5
// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)
// number = -5

// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)

//Date and time

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56








