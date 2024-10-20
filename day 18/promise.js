//call back

// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)

// Function definition with a callback parameter
// const doSomething = callback => {
//     // Simulating a delay of 2000 milliseconds (2 seconds) using setTimeout
//     setTimeout(() => {
//         // Defining an array of skills
//         const skills = ['HTML', 'CSS', 'JS'];
//         // Calling the callback with two arguments: false (indicating no error) and the skills array
//         callback(false, skills);
//     }, 2000);
// };

// // Invoking the doSomething function and passing a callback function
// doSomething((err, result) => {
    // If there is an error (if err is true), log the error
//     if (err) {
//         return console.log(err);
//     }
    // If there is no error, log the result
//     return console.log(result);
// });


// promise constructor

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))