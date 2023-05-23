const addToCartHandler = async function (event) {
	// idk what event is for here

	console.log('this has been clicked');
	const dishPrice = this.previousSibling.value;
	const dishName = this.parentElement.firstElementChild.value;

	console.log(dishName, dishPrice);

	await fetch('/api/cart/add', {
		method: 'POST',
		body: JSON.stringify({
			dishID: this.id,
			dishPrice,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include', // session management
	});

	successMsg.textContent = `Added to cart!`;
	successModal.style.display = 'block';
};

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

document
	.querySelector('.add-button')
	.addEventListener('click', addToCartHandler);
// document.querySelector('.add-button').addEventListener('click', addToCartHandler);
