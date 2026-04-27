// This is the full list of products used to calculate prices.
const PRODUCT_DATA = [
    { ProductID: 1, ProductName: 'Nova Pro', Price: 999.00 },
    { ProductID: 2, ProductName: 'Nova X-Series', Price: 799.00 },
    { ProductID: 3, ProductName: 'Nova Z-Mini', Price: 599.00 },
    { ProductID: 4, ProductName: 'Nova Ultra', Price: 1199.00 },
    { ProductID: 5, ProductName: 'Nova Lite', Price: 399.00 },
    { ProductID: 6, ProductName: 'Nova Fold', Price: 1499.00 },
    { ProductID: 7, ProductName: 'NovaBook Air', Price: 999.00 },
    { ProductID: 8, ProductName: 'NovaBook Pro 14', Price: 1499.00 },
    { ProductID: 9, ProductName: 'NovaBook Pro 16', Price: 1999.00 },
    { ProductID: 10, ProductName: 'Nova Studio', Price: 2499.00 },
    { ProductID: 11, ProductName: 'Nova Go', Price: 699.00 },
    { ProductID: 12, ProductName: 'Nova Carbon', Price: 1299.00 },
    { ProductID: 13, ProductName: 'Nova Pulse', Price: 129.00 },
    { ProductID: 14, ProductName: 'Nova Air-1', Price: 89.00 },
    { ProductID: 15, ProductName: 'Nova Sonic', Price: 159.00 },
    { ProductID: 16, ProductName: 'Nova Buds Pro', Price: 199.00 },
    { ProductID: 17, ProductName: 'Nova Flow', Price: 79.00 },
    { ProductID: 18, ProductName: 'Nova Studio Over-Ear', Price: 299.00 },
    { ProductID: 19, ProductName: 'Nova Watch S', Price: 349.00 },
    { ProductID: 20, ProductName: 'Nova Sporty', Price: 199.00 },
    { ProductID: 21, ProductName: 'Nova Classic', Price: 249.00 },
    { ProductID: 22, ProductName: 'Nova Active', Price: 149.00 },
    { ProductID: 23, ProductName: 'Nova Horizon', Price: 449.00 },
    { ProductID: 24, ProductName: 'Nova Edge', Price: 299.00 },
    { ProductID: 25, ProductName: 'Nova Pad Air', Price: 599.00 },
    { ProductID: 26, ProductName: 'Nova Pad Pro 11', Price: 799.00 },
    { ProductID: 27, ProductName: 'Nova Pad Pro 13', Price: 1099.00 },
    { ProductID: 28, ProductName: 'Nova Pad Mini', Price: 499.00 },
    { ProductID: 29, ProductName: 'Nova Pad Go', Price: 329.00 },
    { ProductID: 30, ProductName: 'Nova Pad Ultra', Price: 1299.00 }
];

// This calculates subtotal, shipping, and final price.
function loadTotals() {
    // Get items user added to cart
    const cartIds = JSON.parse(localStorage.getItem('userCart')) || [];

    // Get quantity of each item
    const cartQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};

    // Get selected shipping price
    const shippingPrice = parseFloat(localStorage.getItem('selectedShippingPrice')) || 0;

    let subtotal = 0;

    // Go through each cart item and calculate total price
    cartIds.forEach(id => {
        const product = PRODUCT_DATA.find(p => p.ProductID === parseInt(id));
        if (product) {
            subtotal += product.Price * (cartQuantities[id] || 1);
        }
    });

    // Show subtotal on page
    document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;

    // Show shipping cost
    document.getElementById('shipping-cost').textContent = `$${shippingPrice.toFixed(2)}`;

    // Show final total (subtotal + shipping)
    document.getElementById('grand-total').textContent = `$${(subtotal + shippingPrice).toFixed(2)}`;

    // Show number of items in cart 
    document.getElementById('cart-count').textContent = cartIds.length;
}

// Runs when user clicks "Pay"
document.getElementById('finalPaymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload

    // Check if user agreed to terms
    if (!document.getElementById('agreeTerms').checked) {
        alert("Please check the box to agree to the payment.");
        return;
    }

    // Show success screen
    const overlay = document.getElementById('paymentSuccessOverlay');
    const timestampBox = document.getElementById('submissionTimestamp');
    const emailBox = document.getElementById('confirmationEmailText');
    const userEmail = document.getElementById('pay-email').value;

    overlay.style.display = 'flex';
    emailBox.textContent = `Confirmation will be sent to ${userEmail}`;

    // Show current Sydney time
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Australia/Sydney',
        timeZoneName: 'short'
    };
    
    timestampBox.textContent = `Ordered placed at: ${now.toLocaleString('en-US', options)}`;

    // Send user back to home page after 5 seconds
    localStorage.clear();
    setTimeout(() => { window.location.href = 'index.html'; }, 5000);
});

// Run totals when page loads
document.addEventListener('DOMContentLoaded', loadTotals);