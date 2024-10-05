//Non-primitive data types

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]

// console.log(nums == numbers)  // false

// let userOne = {
// name:'Nepal',
// role:'Student',
// country:'Nepal'
// }

// let userTwo = {
// name:'Bishal',
// role:'teaching',
// country:'Nepal'
// }

// console.log(userOne == userTwo) // false

//Number Data types

// let age = 35
// const gravity = 9.81 
// let mass = 72         
// const PI = 3.14       
// const boilingPoint = 100 
// const bodyTemp = 37      

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


//Math object

// const PI = Math.PI
// console.log(PI)
// console.log(Math.round(PI))    //round values to the nearest number            
// console.log(Math.round(9.81))    //         
// console.log(Math.floor(PI))//rounding down
// console.log(Math.ceil(PI)) // rounding up
// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)
// const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
// console.log(num)
// console.log(Math.abs(-10)) ////Absolute value
// console.log(Math.sqrt(100)) //Square root
// console.log(Math.pow(3, 2))//Power

// Trigonometry
// Math.sin(0)
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)

//Random Number Generator

// let randomNum = Math.random() // generates 0 to 0.999...
// let numBtnZeroAndTen = randomNum * 11
// console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99
// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)

//string

// let space = ' '           // an empty space string
// let firstName = 'Madan'
// let lastName = 'Belbase'
// let country = 'Nepal'
// let city = 'Ktm'
// let language = 'JavaScript'

//string concatination

// let firstName = 'Madan'
// let lastName = 'Belbase'
// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// console.log(fullName);

//concatination using addition Operator

let space = ' '
let firstName = 'Madan'
let lastName = 'Belbase'
let country = 'Nepal'
let city = 'kathamandu'
let language = 'JavaScript'
let job = 'student'
let age = 2500000


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

console.log('I hope everyone is enjoying the 30 Days Of lerning utasv  challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//Template Literals (Template Strings)

// let firstName = 'Madan'
// let lastName = 'Belbase'
// let country = 'Nepal'
// let city = 'ktm'
// let language = 'JavaScript'
// let job = 'student'
// let age = 250
// let fullName = firstName + ' ' + lastName

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)






