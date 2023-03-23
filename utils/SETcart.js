// Set cart data in sess storage:

function SETcartFromSess(cart) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

module.exports = SETcartFromSess;