// This array stores all products displayed in the shop.
// Each product contains details like name, price, category, description, stock, and image.
const PRODUCT_DATA = [
    // SMARTPHONES
    { ProductID: 1, ProductName: 'Nova Pro', Price: 999.00, CategoryName: 'Smartphone', Description: 'A premium smartphone built for high performance, smooth multitasking, and everyday use with a modern design.', StockLevel: 50, ImagePath: 'Images/s1.png' },
    { ProductID: 2, ProductName: 'Nova X-Series', Price: 799.00, CategoryName: 'Smartphone', Description: 'A balanced smartphone with strong battery life, clear display, and reliable performance for daily tasks.', StockLevel: 80, ImagePath: 'Images/s2.png' },
    { ProductID: 3, ProductName: 'Nova Z-Mini', Price: 599.00, CategoryName: 'Smartphone', Description: 'A compact smartphone designed for easy one-hand use while still delivering solid everyday performance.', StockLevel: 110, ImagePath: 'Images/s3.png' },
    { ProductID: 4, ProductName: 'Nova Ultra', Price: 1199.00, CategoryName: 'Smartphone', Description: 'A high-end device built for powerful performance, fast processing, and professional-level usage.', StockLevel: 30, ImagePath: 'Images/s4.png' },
    { ProductID: 5, ProductName: 'Nova Lite', Price: 399.00, CategoryName: 'Smartphone', Description: 'An affordable smartphone with essential features, smooth usability, and reliable everyday performance.', StockLevel: 200, ImagePath: 'Images/s5.png' },
    { ProductID: 6, ProductName: 'Nova Fold', Price: 1499.00, CategoryName: 'Smartphone', Description: 'A foldable smartphone designed for multitasking, productivity, and a flexible modern experience.', StockLevel: 15, ImagePath: 'Images/s6.png' },

    // LAPTOPS
    { ProductID: 7, ProductName: 'NovaBook Air', Price: 999.00, CategoryName: 'Laptop', Description: 'A lightweight laptop with fast performance, ideal for study, work, and everyday computing tasks.', StockLevel: 45, ImagePath: 'Images/l1.png' },
    { ProductID: 8, ProductName: 'NovaBook Pro 14', Price: 1499.00, CategoryName: 'Laptop', Description: 'A powerful laptop designed for creators, offering smooth performance for design and editing work.', StockLevel: 25, ImagePath: 'Images/l2.png' },
    { ProductID: 9, ProductName: 'NovaBook Pro 16', Price: 1999.00, CategoryName: 'Laptop', Description: 'A large performance laptop built for demanding tasks like video editing and heavy workloads.', StockLevel: 20, ImagePath: 'Images/l3.png' },
    { ProductID: 10, ProductName: 'Nova Studio', Price: 2499.00, CategoryName: 'Laptop', Description: 'A high-performance machine designed for professional editing, design, and advanced computing.', StockLevel: 10, ImagePath: 'Images/l4.png' },
    { ProductID: 11, ProductName: 'Nova Go', Price: 699.00, CategoryName: 'Laptop', Description: 'A student-friendly laptop with good performance and long battery life for daily school use.', StockLevel: 100, ImagePath: 'Images/l5.png' },
    { ProductID: 12, ProductName: 'Nova Carbon', Price: 1299.00, CategoryName: 'Laptop', Description: 'A durable laptop with a lightweight carbon design, built for strength and portability.', StockLevel: 40, ImagePath: 'Images/l6.png' },

    // EARBUDS
    { ProductID: 13, ProductName: 'Nova Pulse', Price: 129.00, CategoryName: 'Earbuds', Description: 'Noise-cancelling earbuds that deliver clear sound and an immersive listening experience.', StockLevel: 150, ImagePath: 'Images/e1.png' },
    { ProductID: 14, ProductName: 'Nova Air-1', Price: 89.00, CategoryName: 'Earbuds', Description: 'Lightweight earbuds designed for comfort and clear audio during everyday use.', StockLevel: 200, ImagePath: 'Images/e2.png' },
    { ProductID: 15, ProductName: 'Nova Sonic', Price: 159.00, CategoryName: 'Earbuds', Description: 'Bass-focused earbuds made for music lovers who enjoy deep and rich sound quality.', StockLevel: 90, ImagePath: 'Images/e3.png' },
    { ProductID: 16, ProductName: 'Nova Buds Pro', Price: 199.00, CategoryName: 'Earbuds', Description: 'Premium earbuds with advanced audio features and high-quality sound clarity.', StockLevel: 60, ImagePath: 'Images/e4.png' },
    { ProductID: 17, ProductName: 'Nova Flow', Price: 79.00, CategoryName: 'Earbuds', Description: 'Sport earbuds designed for movement, workouts, and active daily lifestyles.', StockLevel: 300, ImagePath: 'Images/e5.png' },
    { ProductID: 18, ProductName: 'Nova Studio Pro', Price: 299.00, CategoryName: 'Earbuds', Description: 'High-fidelity earbuds built for accurate sound and professional listening quality.', StockLevel: 40, ImagePath: 'Images/e6.png' },

    // WATCHES
    { ProductID: 19, ProductName: 'Nova Watch S', Price: 349.00, CategoryName: 'Watches', Description: 'Smartwatch with health tracking, notifications, and a clean modern design.', StockLevel: 75, ImagePath: 'Images/w1.png' },
    { ProductID: 20, ProductName: 'Nova Sporty', Price: 199.00, CategoryName: 'Watches', Description: 'Fitness smartwatch designed for workouts, sports, and outdoor activities.', StockLevel: 120, ImagePath: 'Images/w2.png' },
    { ProductID: 21, ProductName: 'Nova Classic', Price: 249.00, CategoryName: 'Watches', Description: 'Simple and elegant smartwatch suitable for everyday wear and style.', StockLevel: 100, ImagePath: 'Images/w3.png' },
    { ProductID: 22, ProductName: 'Nova Active', Price: 149.00, CategoryName: 'Watches', Description: 'Lightweight fitness tracker that monitors activity, steps, and health metrics.', StockLevel: 180, ImagePath: 'Images/w4.png' },
    { ProductID: 23, ProductName: 'Nova Horizon', Price: 449.00, CategoryName: 'Watches', Description: 'Premium smartwatch combining advanced features with a luxury design.', StockLevel: 30, ImagePath: 'Images/w5.png' },
    { ProductID: 24, ProductName: 'Nova Edge', Price: 299.00, CategoryName: 'Watches', Description: 'Slim smartwatch offering strong performance in a lightweight modern build.', StockLevel: 55, ImagePath: 'Images/w6.png' },

    // IPADS
    { ProductID: 25, ProductName: 'Nova Pad Air', Price: 599.00, CategoryName: 'Ipads', Description: 'Balanced tablet for study, entertainment, and everyday productivity tasks.', StockLevel: 80, ImagePath: 'Images/i1.png' },
    { ProductID: 26, ProductName: 'Nova Pad Pro 11', Price: 799.00, CategoryName: 'Ipads', Description: 'Powerful tablet designed for drawing, creative work, and multitasking.', StockLevel: 40, ImagePath: 'Images/i2.png' },
    { ProductID: 27, ProductName: 'Nova Pad Pro 13', Price: 1099.00, CategoryName: 'Ipads', Description: 'Large display tablet built for immersive work, media, and productivity.', StockLevel: 25, ImagePath: 'Images/i3.png' },
    { ProductID: 28, ProductName: 'Nova Pad Mini', Price: 499.00, CategoryName: 'Ipads', Description: 'Compact and portable tablet for quick tasks and everyday convenience.', StockLevel: 120, ImagePath: 'Images/i4.png' },
    { ProductID: 29, ProductName: 'Nova Pad Go', Price: 329.00, CategoryName: 'Ipads', Description: 'Affordable tablet ideal for streaming, browsing, and casual entertainment.', StockLevel: 150, ImagePath: 'Images/i5.png' },
    { ProductID: 30, ProductName: 'Nova Pad Ultra', Price: 1299.00, CategoryName: 'Ipads', Description: 'High-performance tablet powerful enough to replace a laptop for most tasks.', StockLevel: 15, ImagePath: 'Images/i6.png' }
];

// Runs once the page has fully loaded
// Getting things from the page (like search bar, buttons, etc.)
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('product-list'); 
    const searchInput = document.getElementById('search-input');
    const cartCountLabel = document.getElementById('cart-count');
    const sortButtons = document.querySelectorAll('.sort');
    const filterButtons = document.querySelectorAll('.filter');

    // Keeps track of what user is doing
    let currentSort = 'default'; // how products are sorted
    let currentFilter = 'all'; // category filter
    let cart = JSON.parse(localStorage.getItem('userCart')) || []; // saved cart
    
    // Shows how many items are in cart
    function updateCartUI() {
        if (cartCountLabel) {
            cartCountLabel.textContent = cart.length;
            cartCountLabel.style.display = cart.length > 0 ? 'inline-block' : 'none';
        }
    }

    // Displays all products on the page
function renderShop(productsToRender) {
    productsContainer.innerHTML = productsToRender.map(product => {
        const isAdded = cart.includes(product.ProductID);

        return `
            <div class="product-card">
                <div class="product-card-image-wrapper">
                    <img src="${product.ImagePath}" alt="${product.ProductName}" class="product-image">
                </div>

                <h3 class="product-name">${product.ProductName}</h3>

                <!-- 👇 CATEGORY ADDED HERE -->
                <p class="product-category">${product.CategoryName}</p>

                <p class="product-description">${product.Description}</p>
                <p class="product-price">$${product.Price.toFixed(2)}</p>

                <div class="btn-group">
                    <button class="stock-btn" onclick="checkStock(${product.StockLevel})">Stock</button>
                    <button class="cart-btn ${isAdded ? 'remove' : ''}" onclick="toggleCart(${product.ProductID})">
                        ${isAdded ? 'Remove' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ADD / REMOVE CART 
    window.toggleCart = (id) => {
        const index = cart.indexOf(id);
        if (index > -1) cart.splice(index, 1);
        else cart.push(id);
        localStorage.setItem('userCart', JSON.stringify(cart));
        updateCartUI();
        applyFilters(); 
    };

     // SHOW STOCK ALERT 
    window.checkStock = (level) => alert(`Nova Stock: ${level} units left.`);

    // SEARCH + FILTER + SORT 
    function applyFilters() {
        let results = [...PRODUCT_DATA];
        const query = searchInput.value.toLowerCase();

    // search products
        if (query) {
            results = results.filter(p => p.ProductName.toLowerCase().includes(query));
        }

    // filter by category
        if (currentFilter !== 'all') {
            results = results.filter(p => p.CategoryName === currentFilter);
        }
        
    // sort prices
        if (currentSort === 'low-to-high') results.sort((a, b) => a.Price - b.Price);
        else if (currentSort === 'high-to-low') results.sort((a, b) => b.Price - a.Price);

        renderShop(results);
    }

    // typing in search bar
    searchInput.addEventListener('input', applyFilters);

    // sorting buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.getAttribute('data-sort');
            applyFilters();
        });
    });

    // category buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    // LOAD PAGE FIRST TIME 
    updateCartUI();
    applyFilters();
});