const addToCartHandler = async function(event) {
    event.preventDefault();
    const dishName = this.siblings('#dish-name').attr('value');
    const dishPrice = this.siblings('#dish-price').attr('value');
    console.log(dishName, dishPrice);


    await fetch('/cart/add', {
        method: 'POST',
        body: JSON.stringify({
            dishName, dishPrice
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }); // add here: add to cart w/ session
}

document.querySelector('.add-button').addEventListener('click', addToCartHandler);