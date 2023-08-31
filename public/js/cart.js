// Get the cart items container
const cartItemsContainer = document.querySelector('.cart-items');

// Get selected item information from localStorage
const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

// Update cart display in the UI
function updateCartDisplay() {
    // Clear the cart container
    cartItemsContainer.innerHTML = '';

    if (selectedItem) {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const imageElement = document.createElement('img');
        imageElement.src = selectedItem.image;
        imageElement.alt = selectedItem.name;

        const nameElement = document.createElement('p');
        nameElement.textContent = selectedItem.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = selectedItem.description;

        cartItemElement.appendChild(imageElement);
        cartItemElement.appendChild(nameElement);
        cartItemElement.appendChild(descriptionElement);

        cartItemsContainer.appendChild(cartItemElement);
    }
}

// Call the updateCartDisplay function
updateCartDisplay();
