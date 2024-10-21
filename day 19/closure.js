// closure

//JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// This is the outer function called `outerFunction`
// function outerFunction() {
//     // Declare a variable `count` initialized to 0
//     let count = 0;

//     // Define an inner function called `innerFunction`
//     function innerFunction() {
//         // Increment `count` by 1 each time `innerFunction` is called
//         count++;
//         // Return the updated value of `count`
//         return count;
//     }

//     // `outerFunction` returns `innerFunction` itself, allowing us to call it later
//     return innerFunction;
// }

// // Call `outerFunction` and store the result in `innerFunc`
// // `outerFunction` returns `innerFunction`, so `innerFunc` is a reference to `innerFunction`
// const innerFunc = outerFunction();

// // Call `innerFunc()` for the first time
// console.log(innerFunc()); // Output: 1
// // `count` is incremented to 1 and returned.

// // Call `innerFunc()` for the second time
// console.log(innerFunc()); // Output: 2
// // `count` is incremented to 2 and returned.

// // Call `innerFunc()` for the third time
// console.log(innerFunc()); // Output: 3
// // `count` is incremented to 3 and returned.


//Another exmple of closure

function outerFunction() {
    let count = 0;

    // Inner function to increment `count`
    function plusOne() {
        count++;
        return count;
    }

    // Inner function to decrement `count`
    function minusOne() {
        count--;
        return count;
    }

    // Return an object containing the references to the functions
    return {
        plusOne: plusOne,
        minusOne: minusOne
    };
}

const innerFuncs = outerFunction();

// Now you can call the `plusOne` and `minusOne` functions
console.log(innerFuncs.plusOne()); // Output: 1
console.log(innerFuncs.minusOne()); // Output: 0

