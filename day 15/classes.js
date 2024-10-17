//classes
//class constructor

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// const person = new Person("Madan", "Belbase");
// console.log(person);

//Default  values with constructor

// class Person {
//     constructor(
//       firstName = 'Madan',
//       lastName = 'Belbase',
//       age = 250,
//       country = 'Nepal',
//       city = 'Ktm'
//     ) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//   }
  
//   const person1 = new Person() // it will take the default values
//   const person2 = new Person('Ram', 'Thapa', 28, 'Nepal', 'Butwal')
  
//   console.log(person1)
//   console.log(person2)

//class methods

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//   }
  
//   const person1 = new Person('Madan', 'Belbase', 250, 'Nepal', 'kathamandu')
//   const person2 = new Person('Kishor', 'chhetri', 28, 'Nepal', 'Butwal')
  
//   console.log(person1.getFullName())
//   console.log(person2.getFullName())


//properties with inital value

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 100
//       this.skills = ["Html","css"]
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//   }
  
//   const person1 = new Person('Madan', 'Belbase', 250, 'Nepal', 'Biratnagar')
//   const person2 = new Person('Nischal', 'Bhatt', 28, 'Nepal', 'chitwan')
  
//   console.log(person1.score)
//   console.log(person2.score)
  
//   console.log(person1.skills)
//   console.log(person2.skills)


// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 190
//       this.skills = ["js","Python"]
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//   }
  
//   const person1 = new Person('Madan', 'Belbase', 250, 'Nepal', 'jhapa')
//   const person2 = new Person("Hari", 'Shah', 28, 'Japan', 'kkk')
  
//   console.log(person1.getScore) // We do not need parenthesis to call a getter method
//   console.log(person2.getScore)
  
//   console.log(person1.getSkills)
//   console.log(person2.getSkills)


//setter


class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person1 = new Person('Madan', 'Belbase', 250, 'Nepal', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  person1.setScore = 1
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  
  person2.setScore = 1
  person2.setSkill = 'Planning'
  person2.setSkill = 'Managing'
  person2.setSkill = 'Organizing'
  
  console.log(person1.score)
  console.log(person2.score)
  
  console.log(person1.skills)
  console.log(person2.skills)
  

  