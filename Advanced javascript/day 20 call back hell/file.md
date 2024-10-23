What is a Callback?
A callback is a function that is passed as an argument to another function and is executed after the completion of that function's operation. In JavaScript, callbacks are often used to handle asynchronous tasks such as reading files, making API requests, or handling user interactions.

 JavaScript is single-threaded, meaning it can execute only one task at a time.

 What is Callback Hell?
Callback hell refers to the situation where callbacks are nested inside one another in such a way that the code becomes hard to read and maintain. It typically happens when multiple asynchronous operations depend on one another, leading to deeply nested callback structures (often forming a pyramid-like shape).((instead of being structured vertically))


inversion  of control
Inversion of Control (IoC) refers to a pattern where the control of the program flow is shifted from the developer's code to external systems, like frameworks or libraries. Instead of having direct control over when functions are executed, the framework or runtime takes control, and the developer provides the necessary logic (like functions or objects) that will be invoked when needed.



Key Concept:
This is an example of callback hell (or pyramid of doom), where multiple nested callbacks are used to manage asynchronous operations. This pattern can become hard to maintain as the depth of nesting increases.


