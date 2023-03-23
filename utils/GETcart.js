// Get cart data in sess storage:

function GETcartFromSess() {
    const cart = sessionStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } return [];
}

module.exports = GETcartFromSess;