const addToCartHandler = async function (event) {

    console.log('this has been clicked');
    const dishPrice = this.previousSibling.value;
    const dishName = this.parentElement.firstElementChild.value;

    console.log(dishName, dishPrice);

    await fetch('/cart/add', {
        method: 'POST',
        body: JSON.stringify({
            dishName, dishPrice
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // add here: add to cart w/ session
}

document.querySelector('.add-button').addEventListener('click', addToCartHandler);