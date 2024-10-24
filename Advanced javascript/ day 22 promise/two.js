const cart = ["shoes", "pants", "kurtha"];

const promise = createOrder(cart);

promise
  .then(function(orderId) {
    console.log(orderId); // Order ID will be logged
    return proceedToPayment(orderId); // Pass orderId to proceedToPayment
  })
  .then(function(paymentInfo) {
    console.log(paymentInfo); // Log payment info
  })
  .catch(function(error) {
    console.log(error); // Catch and log errors
  });


// Function to create a new promise
function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // Validate the cart
    if (!validatecart(cart)) {
      reject("Cart is not valid");
    } else {
      // Create a mock orderId
      const orderId = "12345";
      resolve(orderId); // Resolve the orderId
    }
  });

  return pr;
}

// Function to proceed to payment
function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
    // Mock payment gateway call
    const paymentInfo = `Payment processed for order ${orderId}`;
    resolve(paymentInfo); // Resolve payment info
  });
}

// Function to validate the cart
function validatecart(cart) {
  // Check if the cart is empty
  if (cart.length === 0) {
    return false;
  }
  return true; // Return true if the cart is valid
}
