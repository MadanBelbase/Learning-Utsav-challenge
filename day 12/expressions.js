//Creating a pattern with RegExp Constructor
// let pattern = 'love'
// let regEx = new RegExp(pattern) //This line creates a new regular expression object using the RegExp constructor. The pattern variable, which contains the string 'love', is passed as an argument to the constructor.
// //The regEx variable now holds a regular expression object that can be used to match the pattern 'love' in strings.

// //For example
// let text = "I love programming!";
// let result = regEx.test(text); // This will return true because "love" is in the text
// console.log(result);
// console.log(regEx); // /love/

//Declaring regular expression with global flag and case insensitive flag.

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)
// console.log(regEx)


//RegExpp Object Methods

//test():Tests for a match in a string. It returns true or false.

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)

//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

//output : ["love", index: 2, input: "I love JavaScript", groups: undefined]



//search()
// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)

//output : 2


//Replacing a substring

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced)

// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
// matches = txt.replace(/%/g, '')
// console.log(matches)  

//Square Bracket

// const pattern = '[Aa]pple' // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)
// console.log(matches)  


// const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
// const matches = txt.match(pattern)
// console.log(matches) 

// Escape character(\) in RegExp

// const pattern = /\d/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)


// period(.)

// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]

//Quantifier in RegExp


const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
console.log(matches)

