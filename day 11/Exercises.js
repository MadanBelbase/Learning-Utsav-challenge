 // 1.Destructure the countries object print name, capital, population and languages of all countries


//  const countries = [
//     ['Finland', 'Helsinki', 5540720, ['Finnish', 'Swedish']],
//     ['Sweden', 'Stockholm', 10353442, ['Swedish']],
//     ['Norway', 'Oslo', 5465636, ['Norwegian']]
//   ];

//   for (const [country, capital, population, languages] of countries) {
//     console.log(`Country: ${country}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
//   }
 //A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. 
 //const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  //console.log(name, skills, jsScore, reactScore)

//   const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

//   const [name, skills, [ , , jsScore, reactScore]] = student;
  
//   console.log(name, skills, jsScore, reactScore);

//

// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//       ],
//       backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//       ],
//       dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//       ],
//       dataScience:['Python', 'R', 'D3.js']
//     }
//   }

//   const newstudent = student;
//   console.log(newstudent)

  // q1  Add Bootstrap with level 8 to the front end skill sets



const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
student.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
console.log(student.skills.frontEnd);


//  q 2 Add Express with level 9 to the back end skill sets
student.skills.backEnd.push({skill: "Express",level:9})
console.log(student.skills.backEnd);

//Q 3 Add SQL with level 8 to the data base skill sets
student.skills.dataBase.push({skill: 'Sql',level:8})
console.log(student.skills.dataBase);

//q4 Add SQL without level to the data science skill sets

student.skills.dataScience.push('sql')
console.log(student.skills.dataScience);


  
