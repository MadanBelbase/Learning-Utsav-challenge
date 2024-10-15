// console.error('This is an error message')
// console.error('We all make mistakes')

//console.table()

// const user = {
//     name: 'Madan',
//     title: 'Programmer',
//     country: 'Nepal',
//     city: 'Ktm',
//     age: 250
//   }
//   console.table(user)

// const users = [
//     {
//       name: 'Madan',
//       title: 'Programmer',
//       country: 'Nepal',
//       city: 'Ktm',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]
//   console.table(users)

//console.time() :-  Starts a timer you can use to track how long an operation takes.


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')
  



