// Map

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//creating an empty Map

// const map = new Map()
// console.log(map)


//creating the map from arrray

// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
//   const map = new Map(countries)
//   console.log(map)
//   console.log(map.size)
  
// Adding value to the map

// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)


//Gettiong value from map



// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ];
  
//   const map = new Map(countries); // Create a Map from the countries array
//   console.log(map.get('Finland')); // Use get() on the Map to retrieve the capital of Finland
  

  //checking key in map


  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ];
  
  const map = new Map(countries);
  for (const country of countries) {
    console.log(country)
  }