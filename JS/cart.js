// This array stores all products displayed in the shop.
// Each product contains details like name, price, category, description, stock, and image.
const ALL_PRODUCTS = [
    { ProductID: 1, ProductName: 'Nova Pro', Price: 999, ImagePath: 'Images/s1.png' },
    { ProductID: 2, ProductName: 'Nova X-Series', Price: 799, ImagePath: 'Images/s2.png' },
    { ProductID: 3, ProductName: 'Nova Z-Mini', Price: 599, ImagePath: 'Images/s3.png' },
    { ProductID: 4, ProductName: 'Nova Ultra', Price: 1199, ImagePath: 'Images/s4.png' },
    { ProductID: 5, ProductName: 'Nova Lite', Price: 399, ImagePath: 'Images/s5.png' },
    { ProductID: 6, ProductName: 'Nova Fold', Price: 1499, ImagePath: 'Images/s6.png' },

    { ProductID: 7, ProductName: 'NovaBook Air', Price: 999, ImagePath: 'Images/l1.png' },
    { ProductID: 8, ProductName: 'NovaBook Pro 14', Price: 1499, ImagePath: 'Images/l2.png' },
    { ProductID: 9, ProductName: 'NovaBook Pro 16', Price: 1999, ImagePath: 'Images/l3.png' },
    { ProductID: 10, ProductName: 'Nova Studio', Price: 2499, ImagePath: 'Images/l4.png' },
    { ProductID: 11, ProductName: 'Nova Go', Price: 699, ImagePath: 'Images/l5.png' },
    { ProductID: 12, ProductName: 'Nova Carbon', Price: 1299, ImagePath: 'Images/l6.png' },

    { ProductID: 13, ProductName: 'Nova Pulse', Price: 129, ImagePath: 'Images/e1.png' },
    { ProductID: 14, ProductName: 'Nova Air-1', Price: 89, ImagePath: 'Images/e2.png' },
    { ProductID: 15, ProductName: 'Nova Sonic', Price: 159, ImagePath: 'Images/e3.png' },
    { ProductID: 16, ProductName: 'Nova Buds Pro', Price: 199, ImagePath: 'Images/e4.png' },
    { ProductID: 17, ProductName: 'Nova Flow', Price: 79, ImagePath: 'Images/e5.png' },
    { ProductID: 18, ProductName: 'Nova Over-Ear', Price: 299, ImagePath: 'Images/e6.png' },

    { ProductID: 19, ProductName: 'Nova Watch S', Price: 349, ImagePath: 'Images/w1.png' },
    { ProductID: 20, ProductName: 'Nova Sporty', Price: 199, ImagePath: 'Images/w2.png' },
    { ProductID: 21, ProductName: 'Nova Classic', Price: 249, ImagePath: 'Images/w3.png' },
    { ProductID: 22, ProductName: 'Nova Active', Price: 149, ImagePath: 'Images/w4.png' },
    { ProductID: 23, ProductName: 'Nova Horizon', Price: 449, ImagePath: 'Images/w5.png' },
    { ProductID: 24, ProductName: 'Nova Edge', Price: 299, ImagePath: 'Images/w6.png' },

    { ProductID: 25, ProductName: 'Nova Pad Air', Price: 599, ImagePath: 'Images/i1.png' },
    { ProductID: 26, ProductName: 'Nova Pad Pro 11', Price: 799, ImagePath: 'Images/i2.png' },
    { ProductID: 27, ProductName: 'Nova Pad Pro 13', Price: 1099, ImagePath: 'Images/i3.png' },
    { ProductID: 28, ProductName: 'Nova Pad Mini', Price: 499, ImagePath: 'Images/i4.png' },
    { ProductID: 29, ProductName: 'Nova Pad Go', Price: 329, ImagePath: 'Images/i5.png' },
    { ProductID: 30, ProductName: 'Nova Pad Ultra', Price: 1299, ImagePath: 'Images/i6.png' }
];

// This stores how many of each item the user added to cart.
let cartQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};

function loadCart() {
    // Get saved cart items from storage
    const cartIds = JSON.parse(localStorage.getItem('userCart')) || [];
    
    // Get page elements
    const tableBody = document.getElementById('cart-items-body');
    const grandTotalSpan = document.getElementById('grand-total');
    const subtotalSpan = document.getElementById('summary-subtotal');
    const cartCount = document.getElementById('cart-count');

    let html = ""; // stores table rows
    let grandTotal = 0; // total price of cart
    
    // Get only products that are actually in the cart
    const activeItems = ALL_PRODUCTS.filter(p => cartIds.includes(p.ProductID));

    // Loop through each cart item
    activeItems.forEach(item => {

        // If item has no quantity yet, set it to 1
        if (!cartQuantities[item.ProductID]) cartQuantities[item.ProductID] = 1;
        
        const qty = cartQuantities[item.ProductID];
        const rowTotal = item.Price * qty;
        grandTotal += rowTotal;

        // Create a row for each product
        html += `
            <tr>
                <td><img src="${item.ImagePath}" alt="${item.ProductName}" style="width:50px; height:50px; object-fit:contain;"></td>
                <td><strong>${item.ProductName}</strong></td>
                <td>$${item.Price.toFixed(2)}</td>
                <td>
                    <div class="qty-box">
                        <button class="qty-btn" onclick="changeQty(${item.ProductID}, -1)">−</button>
                        <span>${qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.ProductID}, 1)">+</button>
                    </div>
                </td>
                <td>$${rowTotal.toFixed(2)}</td>
                <td><button class="remove-btn-icon" onclick="removeItem(${item.ProductID})">Remove</button></td>
            </tr>`;
    });

    // Show message if cart is empty
    if (tableBody) {
        tableBody.innerHTML = html || "<tr><td colspan='6' style='text-align:center; padding:40px;'>Your cart is empty.</td></tr>";
    }
    
    // Show total price
    if (grandTotalSpan) grandTotalSpan.textContent = `$${grandTotal.toFixed(2)}`;
    if (subtotalSpan) subtotalSpan.textContent = `$${grandTotal.toFixed(2)}`;
    
    // Show number of items in cart (top badge)
    if (cartCount) cartCount.textContent = cartIds.length;

    // Save updated quantities
    localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));
}

// Increases or decreases item amount
window.changeQty = (id, delta) => {
    cartQuantities[id] = (cartQuantities[id] || 1) + delta;
    if (cartQuantities[id] < 1) cartQuantities[id] = 1;
    loadCart();
};

// Deletes product from cart completely
window.removeItem = (id) => {
    let ids = JSON.parse(localStorage.getItem('userCart')) || [];
    localStorage.setItem('userCart', JSON.stringify(ids.filter(i => i !== id)));
    delete cartQuantities[id];
    loadCart();
};

// Sends user to shipping page if cart is not empty
window.goToShipping = () => {
    const cartIds = JSON.parse(localStorage.getItem('userCart')) || [];
    if (cartIds.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "shipping.html";
    }
};

// Run cart loading when page opens
document.addEventListener('DOMContentLoaded', loadCart);