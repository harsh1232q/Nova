// Using your provided PRODUCT DATA
const PRODUCT_DATA = [
    { ProductID: 1, ProductName: 'Nova Pro', Price: 999.00, ImagePath: 'Images/s1.jpg' },
    { ProductID: 2, ProductName: 'Nova X-Series', Price: 799.00, ImagePath: 'Images/s2.jpg' },
    { ProductID: 3, ProductName: 'Nova Z-Mini', Price: 599.00, ImagePath: 'Images/s3.jpg' },
    { ProductID: 4, ProductName: 'Nova Ultra', Price: 1199.00, ImagePath: 'Images/s4.jpg' },
    { ProductID: 5, ProductName: 'Nova Lite', Price: 399.00, ImagePath: 'Images/s5.jpg' },
    { ProductID: 6, ProductName: 'Nova Fold', Price: 1499.00, ImagePath: 'Images/s6.jpg' },
    { ProductID: 7, ProductName: 'NovaBook Air', Price: 999.00, ImagePath: 'Images/l1.jpg' },
    { ProductID: 8, ProductName: 'NovaBook Pro 14', Price: 1499.00, ImagePath: 'Images/l2.jpg' },
    { ProductID: 9, ProductName: 'NovaBook Pro 16', Price: 1999.00, ImagePath: 'Images/l3.jpg' },
    { ProductID: 10, ProductName: 'Nova Studio', Price: 2499.00, ImagePath: 'Images/l4.jpg' },
    { ProductID: 11, ProductName: 'Nova Go', Price: 699.00, ImagePath: 'Images/l5.jpg' },
    { ProductID: 12, ProductName: 'Nova Carbon', Price: 1299.00, ImagePath: 'Images/l6.jpg' },
    { ProductID: 13, ProductName: 'Nova Pulse', Price: 129.00, ImagePath: 'Images/e1.jpg' },
    { ProductID: 14, ProductName: 'Nova Air-1', Price: 89.00, ImagePath: 'Images/e2.jpg' },
    { ProductID: 15, ProductName: 'Nova Sonic', Price: 159.00, ImagePath: 'Images/e3.jpg' },
    { ProductID: 16, ProductName: 'Nova Buds Pro', Price: 199.00, ImagePath: 'Images/e4.jpg' },
    { ProductID: 17, ProductName: 'Nova Flow', Price: 79.00, ImagePath: 'Images/e5.jpg' },
    { ProductID: 18, ProductName: 'Nova Studio Over-Ear', Price: 299.00, ImagePath: 'Images/e6.jpg' },
    { ProductID: 19, ProductName: 'Nova Watch S', Price: 349.00, ImagePath: 'Images/w1.jpg' },
    { ProductID: 20, ProductName: 'Nova Sporty', Price: 199.00, ImagePath: 'Images/w2.jpg' },
    { ProductID: 21, ProductName: 'Nova Classic', Price: 249.00, ImagePath: 'Images/w3.jpg' },
    { ProductID: 22, ProductName: 'Nova Active', Price: 149.00, ImagePath: 'Images/w4.jpg' },
    { ProductID: 23, ProductName: 'Nova Horizon', Price: 449.00, ImagePath: 'Images/w5.jpg' },
    { ProductID: 24, ProductName: 'Nova Edge', Price: 299.00, ImagePath: 'Images/w6.jpg' },
    { ProductID: 25, ProductName: 'Nova Pad Air', Price: 599.00, ImagePath: 'Images/i1.jpg' },
    { ProductID: 26, ProductName: 'Nova Pad Pro 11', Price: 799.00, ImagePath: 'Images/i2.jpg' },
    { ProductID: 27, ProductName: 'Nova Pad Pro 13', Price: 1099.00, ImagePath: 'Images/i3.jpg' },
    { ProductID: 28, ProductName: 'Nova Pad Mini', Price: 499.00, ImagePath: 'Images/i4.jpg' },
    { ProductID: 29, ProductName: 'Nova Pad Go', Price: 329.00, ImagePath: 'Images/i5.jpg' },
    { ProductID: 30, ProductName: 'Nova Pad Ultra', Price: 1299.00, ImagePath: 'Images/i6.jpg' }
];

function updateTotals() {
    // 1. Get user cart and quantities from storage
    const cartIds = JSON.parse(localStorage.getItem('userCart')) || [];
    const cartQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};
    
    let subtotal = 0;

    // Calculate Subtotal using the provided PRODUCT_DATA
    cartIds.forEach(id => {
        const product = PRODUCT_DATA.find(p => p.ProductID === parseInt(id));
        if (product) {
            const qty = cartQuantities[id] || 1;
            subtotal += product.Price * qty;
        }
    });

    // Get Selected Shipping Price
    const shippingRadios = document.getElementsByName('method');
    let shippingCost = 0;
    
    shippingRadios.forEach(radio => {
        if (radio.checked) {
            shippingCost = parseFloat(radio.value);
        }
    });

    // Update the Text on screen
    const subtotalDisplay = document.getElementById('summary-subtotal');
    const shippingDisplay = document.getElementById('shipping-cost');
    const totalDisplay = document.getElementById('grand-total');
    const cartCount = document.getElementById('cart-count');

    if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingDisplay) shippingDisplay.textContent = `$${shippingCost.toFixed(2)}`;
    if (totalDisplay) totalDisplay.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
    if (cartCount) cartCount.textContent = cartIds.length;
}

// Listen for clicks on the Shipping Method radio buttons
document.addEventListener('change', (event) => {
    if (event.target.name === 'method') {
        updateTotals();
    }
});

// Form submission to Payment page
const shippingForm = document.getElementById('shipping-form');
if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const shippingRadios = document.getElementsByName('method');
        let shippingCost = 0;
        shippingRadios.forEach(radio => {
            if (radio.checked) {
                shippingCost = parseFloat(radio.value);
            }
        });
        localStorage.setItem('selectedShippingPrice', shippingCost);

        window.location.href = "payment.html";
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', updateTotals);