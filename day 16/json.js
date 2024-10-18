// converting the JSON  to javascript Object

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Madan ",
//         "lastName":"Belbase",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Shyam",
//         "lastName":"sharma",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Ram",
//       "lastName":"Thapa",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`
//     const usersObj = JSON.parse(usersText, undefined, 4)
//     console.log(usersObj)


    //using a reviver function with JSON.parse()

    // const usersText = `{
    //     "users":[
    //       {
    //         "firstName":"Madan",
    //         "lastName":"Belabse",
    //         "age":250,
    //         "email":"asab@asb.com"
    //       },
    //       {
    //         "firstName":"Shyam",
    //         "lastName":"James",
    //         "age":25,
    //         "email":"alex@alex.com"
    //       },
    //       {
    //       "firstName":"RAM",
    //       "lastName":"Tekle",
    //       "age":28,
    //       "email":"lidiya@lidiya.com"
    //       }
    //     ]
    //     }`
        
    //     const usersObj = JSON.parse(usersText, (key, value) => {
    //       let newValue =
    //         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    //       return newValue
    //     })
    //     console.log(usersObj)


    //Using a Filter Array with JSON.stringify

    //use the replacer as a filter. 

    const user = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        city: 'Helsinki',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
        age: 250,
        isLoggedIn: false,
        points: 30
      }
      
    const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
    console.log(txt)
      
        