  "use strict"
 // this key word in global context 

//  console.log(this)  // value of this represent  global object  for  browser it is window object and for node it is global  object;

 // this key word in inside a function

 function name(){
    console.log(this)  // value of this depend on  strict mode  when  strict mode is on then this represent undefined  and when strict mode is off then this represent window object 
 }


 // this key word in strict mode - (this substitution)

 // if the value of this key word is undefined ir null this key word replace by the global object  only in  Non -strict mode

 // this key word value is depend on how this key word is called

    // name();
    // window.name();



// this key word in object method 

// const obj = {
//     a: "10", // Property 'a' is a string value
//     x: function() { // Property 'x' is a method (a function)
//        
//       console.log(this);  // this key word represent the object itself 
//     }
//   }
//   obj.x(); // this key word represent the object on which the method is called


const student = {
    printName: "Rahul",
    age: 20,
    display: function() {
        console.log(this.name); 
    }
};

const student2 = {
    name: "Madan",
};

// Use .call() to invoke student.display with 'this' bound to 'student2'
student.display.call(student2); // This will log "Madan"


// this key word inside dom => reference to the html  element

  