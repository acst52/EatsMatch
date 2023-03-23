const GETcartFromSess = require('../../utils/GETcart'); // use this helper to access cart data on other pgs
const SETcartFromSess = require('../../utils/SETcart');

const addToCartHandler = async function (event) {

    console.log('this has been clicked');
    const dishPrice = this.previousSibling.value;
    const dishName = this.parentElement.firstElementChild.value;
    const dishId = this.getAttribute('data-dish-id'); // gets dish ID from data-dish-id attribute 
    const restoId = this.getAttribute('data-resto-id');

    console.log(dishName, dishPrice, dishId);

// *** NO LONGER NEED THE await fetch BLOCK BELOW B/C WERE HANDLING CART W SESS STORAGE ***

    // get cart from sess storage
    let cart = GETcartFromSess();

    // is dish already in cart?
    const existingCartItems = cart.findIndex(item => item.dish_id === dishId);

    if (existingCartItems >= 0) {
        // like if the dish is already in the cart once, increment quant
        cart[existingCartItems]/quantity + 1;
    } else {
        // if dish not already in cart, push it to the cart
        cart.push({
            dish_id: dishId,
            dish_name: dishName,
            dish_price: dishPrice,
            resto_id: restoId,
            quantity: 1
        });
    }

    // now let's save the updated cart to sess storage using our helper fcn imported from utils:
    SETcartFromSess(cart);

    successMsg.textContent = `Added to cart!`;
    successModal.style.display = 'block';
}

const successModal = document.getElementById('success-modal');
const successMsg = document.getElementById('success-message');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

document.querySelector('.add-button').addEventListener('click', addToCartHandler);

// addToCartHandler not accessible to resto.handlebars. export/import not working, so consulted ChatGPT. 
    // Their fix: make it avail globally with the following line:
window.addToCartHandler = addToCartHandler;