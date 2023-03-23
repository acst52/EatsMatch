const addToCartHandler = async function (event) {

    console.log('this has been clicked');
    const dishPrice = this.previousSibling.value;
    const dishName = this.parentElement.firstElementChild.value;

    console.log(dishName, dishPrice);

    await fetch('/api/cart/add/1', {
        method: 'POST',
        // body: JSON.stringify({
        //     dishName, dishPrice
        // }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    successMsg.textContent = `Added to cart!`;
    successModal.style.display = 'block';

    // add here: add to cart w/ session
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
