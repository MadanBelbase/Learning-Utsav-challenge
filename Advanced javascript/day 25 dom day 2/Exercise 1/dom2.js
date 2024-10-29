function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Select the container where the divs will be placed
const container = document.getElementById('container');

// Loop to generate numbers from 100 to 200
for (let i = 1; i <= 100; i++) {
    // Create a new div element
    const newDiv = document.createElement("div");

    // Add class and content to the div
    newDiv.className = "box";
    newDiv.textContent = i;

    // Check if the number is prime, even, or odd
    if (isPrime(i)) {
        newDiv.classList.add("prime"); // Red background for prime numbers
    } else if (i % 2 === 0) {
        newDiv.classList.add("even"); // Green background for even numbers
    } else {
        newDiv.classList.add("odd");  // Yellow background for odd numbers
    }

    // Append the new div to the container
    container.appendChild(newDiv);
}