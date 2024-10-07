// if

// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// }

//If Else

// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }

// num = -3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }

//If Else if Else

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

//switch
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}


//Tenaray operators

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
