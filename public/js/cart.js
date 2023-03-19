// add to cart function

const addToCartBtn = document.querySelector('.add-to-cart');

addToCartBtn.addEventListener('click', async () => {
  const dish_id = addToCartBtn.dataset.dishId;
  const response = await fetch('/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ dish_id })
  });
  const data = await response.json();
  
  successMsg.textContent = `Added ${data.addToCart.quantity}x ${data.addToCart.Dish.name} to cart!`;
  successMsg.classList.add('visible');
});

// cart btn function, if change to a btn, now is <a> in dev

// const cartBtn = document.getElementById("cart-btn");
// cartBtn.addEventListener("click", function() {
//     window.location.href = "/cart";
// });