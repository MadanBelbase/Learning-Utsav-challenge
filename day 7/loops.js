// do while loop
//  let i = 0
//  do {
//     console.log(i)
//     i++;
//  }while(i<=6)


// for loop

// const number = [1,2,3,4,5]
// for(const num of number)
//     {
//         console.log(num);
//         console.log(num*num);
//     }

// let sum = 0;
// foe (const num of number){
//     sum = sum+num;
// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
//
// }
// console.log(sum);

// const webTeches = ['html','css','javascript','react','redux','node','Monogodb'];
// for(const tech of webTeches )
//     {
//         // console.log(tech);
//         console.log(tech[0])/// get only the first letter of each element
//     }


//break and continue

// for(let i =0 ;i<90;i++)
//     {
//         if(i==67){
//             // break;
//             continue
//         }
//         console.log(i);
//     }


//exercise 3

//1  and 2 copy contries array

// const contlist = ['nepal','china','india','bhutan','usa','uk'];
// const copylist = contlist;
// console.log(copylist);

// const sortlist = copylist.sort();
// console.log(sortlist);

//3 Sort the webTechs arra

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
//  const sort = webTechs.sort();
//  console.log(sort) ;

//Extract all the countries contain the word 'land' from the countries array and print it as array

//const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// const countriesWithLand = countries.filter(country => country.includes('LAND'));

// console.log(countriesWithLand); // ["FINLAND", "IRELAND"]


//Find the country containing the hightest number of characters in the countries array

// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// let longestCountry = "";

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length > longestCountry.length) {
//         longestCountry = countries[i];
//     }
// }

// console.log(longestCountry); // Output: "ETHIOPIA"

//Extract all the countries containing only four characters from the countries array and print it as array
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const fourCharCountries = countries.filter(country => country.length === 4);

console.log(fourCharCountries); // Output: []
