let quantity = 0;
const unitPrice = 200000;

// Selecting elements
const quantityElement = document.querySelector('#quantity');
const totalPriceElement = document.querySelector('#total-price');
const basePriceElement = document.querySelector('#base-price');
const aumentarButton = document.querySelector('#aumentar');
const restarButton = document.querySelector('#restar');

// Function to update the total price and base price
function updatePrices() {
    const basePrice = unitPrice * quantity;
    const totalPrice = basePrice;
   
    totalPriceElement.innerHTML = totalPrice;
}

// Event listeners for buttons
aumentarButton.addEventListener('click', () => {
    quantity++;
    quantityElement.innerHTML = quantity;
    updatePrices();
});

restarButton.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.innerHTML = quantity;
        updatePrices();
    }
});
