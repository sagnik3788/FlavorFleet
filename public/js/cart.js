document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector('.cart-items');

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    // Update cart display in the UI
    function updateCartDisplay() {
        // Clear the cart container
        cartItemsContainer.innerHTML = '';

        if (cartItems && cartItems.length > 0) {
            cartItems.forEach(item => {
                const cartItemElement = document.createElement('div');
                // cartItemElement.classList.add('cart-item');

                const imageElement = document.createElement('img');
                imageElement.src = item.image; 
                imageElement.alt = item.name;

                const nameElement = document.createElement('h1');
                nameElement.textContent = item.name;

                const descriptionElement = document.createElement('h1');
                descriptionElement.textContent = item.description;

                cartItemElement.appendChild(imageElement);
                cartItemElement.appendChild(nameElement);
                cartItemElement.appendChild(descriptionElement);

                cartItemsContainer.appendChild(cartItemElement);
            });
        }
       
    }

      
    function clearCartItems() {
        localStorage.removeItem('cart');
    }
    window.addEventListener('beforeunload', clearCartItems);
   
    
    updateCartDisplay();
});

