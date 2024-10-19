//setting item to the local Storage

//When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

//syntx

//localStorage.setItem('key', 'value')

// localStorage.setItem('firstName', 'Madan') // since the value is string we do not stringify it
// console.log(localStorage)


// //Storing number in a local storage

// localStorage.setItem('age', 200)
// console.log(localStorage)

//Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first

// Storing a string in localStorage
localStorage.setItem('firstName', 'Madan'); // Set key 'firstName' with value 'Madan'

// Logging the localStorage to see all stored values
console.log(localStorage); // Output will include 'firstName': 'Madan'

// Storing a number in localStorage
localStorage.setItem('age', 200); // Set key 'age' with value '200' (will be stored as a string)

// Logging the localStorage to see all stored values
console.log(localStorage); // Output will include 'age': '200'

// Retrieving and logging stored values
const firstName = localStorage.getItem('firstName');
console.log(`First Name: ${firstName}`); // Output: First Name: Madan

const age = localStorage.getItem('age');
console.log(`Age: ${age}`); // Output: Age: 200

// Converting 'age' back to a number if needed
const ageNumber = parseInt(age, 10); // Convert string '200' to a number
console.log(`Age (as a number): ${ageNumber}`); // Output: Age (as a number): 200


