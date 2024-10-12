// set
//Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection


// creating an empty set

// const companies = new Set()
// console.log(companies)

//Creating set from array

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
//   console.log(setOfLanguages)

// adding element in the set

// const companies = new Set() // creating an empty set
// console.log(companies.size) // 0

// companies.add('Google') // add element to the set
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')
// console.log(companies.size) // 5 elements in the set
// console.log(companies)
  


// deleting an element in the set


// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']

// // note : arrays don't have a .delete() method. The .delete() method is used for Map and Set objects, not arrays. To remove an element from an array, you can use other methods like .splice(), .filter(), or .indexOf().

// setOfCompanies = new Set(companies)
// console.log(setOfCompanies.delete('Google'))
// console.log(setOfCompanies.size) // 4 elements left in the set



//Clearing the set


// const companie = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];
// const companies = new Set(companie); // Create a Set from the array
// companies.clear(); // Clear the Set
// console.log(companies); // Output will be: Set(0) {}


//union of set

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b] //spread operator

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)


//intersection of set

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num)) //intersection of two sets can be achieved using filter.
// let C = new Set(c)

// console.log(C)



//Deference of sets


let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)


