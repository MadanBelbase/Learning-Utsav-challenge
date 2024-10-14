// q 1 .Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// // Use regular expressions to find different parts of the income
// const salaryMatch = text.match(/(\d+)\s*euro\s*from\s*salary\s*per\s*month/);
// const bonusMatch = text.match(/(\d+)\s*euro\s*annual\s*bonus/);
// const coursesMatch = text.match(/(\d+)\s*euro\s*online\s*courses\s*per\s*month/);

// // Extract the income amounts from the matched text
// const monthlySalary = parseInt(salaryMatch[1]); // 4000 euros
// const annualBonus = parseInt(bonusMatch[1]);    // 10000 euros
// const monthlyCoursesIncome = parseInt(coursesMatch[1]); // 5500 euros

// // Calculate the total annual income
// const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCoursesIncome * 12);

// // Output the total annual income
// console.log(`Total Annual Income: ${totalAnnualIncome} euros`);

//Regular Expression Terms Used:
// \d+:

// \d means any digit (0-9).
// + means one or more of the preceding character.
// Together, \d+ matches one or more digits (e.g., 4000, 10000).
// \s*:

// \s means whitespace (such as a space, tab, or newline).
// * means zero or more of the preceding character.
// Together, \s* matches zero or more spaces, meaning it is flexible enough to handle whether there's space or not.
// Literal Text:

// The rest of the text like euro, from salary per month, etc., is taken literally. The regex is looking for those exact words in the text.

// 2.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(){

}


console.log(tenMostFrequentWords(paragraph))

