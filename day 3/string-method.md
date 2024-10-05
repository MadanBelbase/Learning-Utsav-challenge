//string method

1) length: The string length method returns the number of characters in a string included empty space.

ex. let js = 'JavaScript'
     console.log(js.length)         // 10

2)toUpperCase(): this method changes the string to uppercase letters.

ex.let string = 'JavaScript'
console.log(string.toUpperCase())     // JAVASCRIPT

3)substr(): It takes two arguments, the starting index and number of characters to slice.

ex.let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

4)substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

ex. let string = 'JavaScript'
     console.log(string.substring(0,4))     // Java
     console.log(string.substring(4,10))    // Script

5)split(): The split method splits a string at a specified place.

ex.let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

6)trim(): Removes trailing space in the beginning or the end of a string.

ex.let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))



7)includes():It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.


8)replace(): takes as a parameter the old substring and a new substring.
       ****string.replace(oldsubstring, newsubstring)

9)charAt(): Takes index and it returns the value at that index
      ****string.charAt(index)

10)charAt(): Takes index and it returns the value at that index
      ****string.charAt(index)

11)match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
    ****string.match(substring)


//Checking Data Types
To check the data type of a certain variable we use the typeof method.

//changing datatype (casting)

Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.


parseInt()
Number()
Plus sign(+)
