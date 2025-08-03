let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName) {
    console.log("caart called");
    let item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: productName, quantity: 1, price: 500 }); // Example price ₹500
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function loadCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const totalItemsElem = document.getElementById('total-items');
    const totalPriceElem = document.getElementById('total-price');
    let totalItems = 0;
    let totalPrice = 0;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</p>
        `;
        cartContainer.appendChild(itemDiv);
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    totalItemsElem.innerText = totalItems;
    totalPriceElem.innerText = totalPrice;
}

if (document.getElementById('cart-count')) {
    updateCartCount();
}

if (document.getElementById('cart-items')) {
    loadCartItems();
}
