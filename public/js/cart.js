
const addToCartHandler = async function (event) {
  event.preventDefault();
	console.log('this has been clicked');
	const dishPrice = this.previousSibling.value; // MIGHT NEED TO CHANGE 'THIS'
	const dishName = this.parentElement.firstElementChild.value; // MIGHT NEED TO CHANGE 'THIS'
	console.log(dishName, dishPrice);

	await fetch('/api/cart/add', {
		method: 'POST',
		body: JSON.stringify({
			dish_id: dishName.dataset.id,
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
