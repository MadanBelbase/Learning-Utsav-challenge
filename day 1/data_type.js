// String: Represents textual data
const name = "John Doe";  // Example of a string

// Number: Represents numeric values (both integer and floating-point)
const age = 25;           // Example of an integer
const pi = 3.14;          // Example of a floating-point number

// Boolean: Represents a true or false value
const isStudent = true;   // Example of a boolean

// Null: Represents an intentional absence of a value
const emptyValue = null;  // Example of null

// Undefined: Represents a variable that has been declared but not assigned a value
let uninitialized;        // Example of undefined

// Object: Represents a collection of key-value pairs
const person = {          // Example of an object
  firstName: "John",
  lastName: "Doe"
};

// Array: Represents an ordered collection of values (type of object)
const colors = ["red", "green", "blue"];  // Example of an array

// Symbol: Represents a unique value
const uniqueId = Symbol("id");  // Example of a symbol

// BigInt: Represents numbers larger than Number can handle
const bigNumber = 1234567890123456789012345678901234567890n;  // Example of a BigInt

// Printing the variables to the console
console.log(name);          // Output: John Doe
console.log(age);           // Output: 25
console.log(pi);            // Output: 3.14
console.log(isStudent);     // Output: true
console.log(emptyValue);    // Output: null
console.log(uninitialized); // Output: undefined
console.log(person);        // Output: { firstName: 'John', lastName: 'Doe' }
console.log(colors);        // Output: [ 'red', 'green', 'blue' ]
console.log(uniqueId);      // Output: Symbol(id)
console.log(bigNumber);     // Output: 1234567890123456789012345678901234567890n
