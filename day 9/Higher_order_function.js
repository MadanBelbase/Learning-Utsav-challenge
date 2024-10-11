
// function cube(callback, n) {
//     return callback(n) * n;
//   }
  
//   // Define the callback function
//   function callback(num) {
//     return num * num; // Squaring the number
//   }
  
  // console.log(cube(callback, 3));
  

  //returning function

  //Higher order functions return function as a value​

//   const higherorder = n =>
//     {
//         const dosomthing = m =>
//             {
//                 const dowhatever =t =>
//                     {
//                         return 2*n+3*m+t;
//                     }
//                     return dowhatever
//             }
//             return dosomthing
//     }
// console.log(higherorder(2)(3)(5));

// const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum

// }
// console.log(sumArray(numbers))

// setting time

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 2000) //


//foreach  only use with array

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)

// console.log(sum)

// const fruits = ["Apple","Mango","Orange","grapes","Banana"]
// fruits.forEach(function(element){
//   console.log(element);
// })
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))


//Map

const numbers = [1, 2, 3, 4, 5,1,2,3]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)



