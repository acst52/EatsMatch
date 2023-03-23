// Get cart data in sess storage:

function GETcartFromSess() {
    const cart = sessionStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return []; // best to return array whether there are items in cart or not
}
}

module.exports = GETcartFromSess;