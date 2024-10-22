//Functions

// function which return full name of a person
// const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// // function which calculates a square of a number
// const square = (n) => n * n

// // a function which generate random hexa colors
// const hexaColor = () => {
//   const str = '0123456789abcdef'
//   let hexa = '#'
//   let index
//   for (let i = 0; i < 6; i++) {
//     index = Math.floor(Math.random() * str.length)
//     hexa += str[index]
//   }
//   return hexa
// }

// // a function which shows date and time
// const showDateTime = () => {
//   const now = new Date()
//   const year = now.getFullYear()
//   const month = now.getMonth() + 1
//   const date = now.getDate()
//   let hours = now.getHours()
//   let minutes = now.getMinutes()
//   if (hours < 10) {
//     hours = '0' + hours
//   }
//   if (minutes < 10) {
//     minutes = '0' + minutes
//   }

//   const dateMonthYear = date + '.' + month + '.' + year
//   const time = hours + ':' + minutes
//   const fullTime = dateMonthYear + ' ' + time
//   return fullTime
// }

//loops
// for (let i = 0; i < n; i++){
//     console.log()
// }

// declaring an array variable
// const names = ['Madan', 'Belbase', 'book', 'Copy']

// // iterating an array using regular for loop
// let len = names.length;
// for(let i = 0; i < len; i++){
//     console.log(names[i].toUpperCase())
// }


// // iterating an array using for of
// for( const name of names) {
//     console.log(name.toUpperCase())
// }

// // iterating array using forEach 
// names.forEach((name) => name.toUpperCase())


// const person = {
//   firstName: 'Madan',
//   lastName: 'Belbase',
//   age: 250,
//   country: 'Nepal',
//   city: 'Ktm',
//   skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
//   isMarried: true
// }
// for(const key in person) {
//     console.log(key)
// }



//conditional 

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}


//classes

class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
