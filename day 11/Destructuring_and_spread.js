//Destructuring  and spread

//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// const numbers = [1,2,3]
// let[num1,num2,num3]=numbers;
// console.log(num1,num2,num3);
// console.log(num1);

// const fullStack = [     //array
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   const [frontEnd, backEnd] = fullStack  // variable 
  
//   console.log(frontEnd)
//   console.log(backEnd)
//   console.log(typeof(fullStack));
//   console.log(typeof(frontEnd));
//   console.log(typeof(backEnd));
  
//   const numbers = [1, 2, 3]
//   let [numOne, , numThree] = numbers //2 is omitted // comma helps to omit the value at that specific index

//   console.log(numOne, numThree);

// destructuring during iteration

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
// console.log(country, city)
// }


//destructuring object


// const reactangle = {
//     width:20,
//     height:10,
//     area:200
// }

// let {width,height,area,perimeter} = reactangle;

// console.log(width,height,area,perimeter) //note : if value is not given to parameter its return undefined



//renaming during the structuring


// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width: w, height: h, area: a, perimeter: p } = rectangle //renaming
  
//   console.log(w, h, a, p) //If the key is not found in the object the variable will be assigned to undefined


// Object parameter without destructuring


// const rect = {
//     width:20,
//     height:10
// }
// const calculateperimeter = rectangle => {
//     return 2*(rectangle.width+rectangle.height)
// }
// console.log(calculateperimeter(rect));
// console.log(typeof(rect))//object
// console.log(typeof(calculateperimeter))//arrow function

// const person = {
//     firstName: 'Madan',
//     lastName: 'Belbase',
//     age: 250,
//     country: 'Nepal',
//     job: 'Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // Let us create a function which give information about the person object without destructuring
  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))



//Spread or Rest Operator


//When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

// const countries = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
//   ]
  
//   let [gem, fra, , ...nordicCountries] = countries
  
//   console.log(gem)
//   console.log(fra)
//   console.log(nordicCountries)

//Spread operator to copy array

// const evens = [0, 2, 4, 6, 8, 10]
// const evenNumbers = [...evens]

// const odds = [1, 3, 5, 7, 9]
// const oddNumbers = [...odds]

// const wholeNumbers = [...evens, ...odds]

// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(wholeNumbers)

//Modifying or changing the object while copying

// const user = {
//     name:'Asabeneh',
//     title:'Programmer',
//     country:'Finland',
//     city:'Helsinki'
//   }
  
//   const copiedUser = {...user, title:'instructor'}
//   console.log(copiedUser)


