//callback hell


// Define a cart array with items to be ordered
const cart = ["shoes", "pants", "kurtha"];

// Step 1: Create an order for the items in the cart
api.createOrder(cart, function() {
    
    // Step 2: After creating the order, proceed to payment
    api.proceedToPayment(function() {
        
        // Step 3: After payment is successful, show the order summary
        api.showOrderSummary(function() {
            
            // Step 4: After showing the summary, update the user's wallet (e.g., deduct amount)
            api.updateWallet();
        });
    });
});
