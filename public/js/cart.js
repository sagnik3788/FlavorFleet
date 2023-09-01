
    // Update cart display in the UI
    document.addEventListener("DOMContentLoaded", function () {
        const cartItemsContainer = document.querySelector('.cart-items');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
    
        // Retrieve cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        function getRandomPrice(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          
    
        // Update cart display in the UI
        function updateCartDisplay() {
            // Clear the cart container
            cartItemsContainer.innerHTML = '';
    
            if (cartItems && cartItems.length > 0) {
                cartItems.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.classList.add('cart-item');
    
                    const imageElement = document.createElement('img');
                    imageElement.src = item.image;
                    imageElement.alt = item.name;
                    imageElement.classList.add('item-image');
    
                    const nameElement = document.createElement('h1');
                    nameElement.textContent = item.name;
                    nameElement.classList.add('item-name');
    
                    const descriptionElement = document.createElement('p'); 
                    descriptionElement.textContent = item.description;
                    descriptionElement.classList.add('item-description');

                    const addButton = document.createElement('button');
                    addButton.textContent = 'Order'; 
                    addButton.classList.add('order-button'); 
                    addButton.dataset.itemId = item.id; 

                    const priceElement = document.createElement('h3');
                    const randomPrice = getRandomPrice(500, 5000); 
                    priceElement.textContent = `(Only ₹${randomPrice})`; 
                    priceElement.classList.add('item-price'); 
    
                    cartItemElement.appendChild(imageElement);
                    cartItemElement.appendChild(nameElement);
                    cartItemElement.appendChild(priceElement);
                    cartItemElement.appendChild(addButton);
                    


                    cartItemsContainer.appendChild(cartItemElement);
                });
    
               
                emptyCartMessage.style.display = 'none';
            } else {
                
                emptyCartMessage.style.display = 'block';
            }
        }
    function clearCartItems() {
        localStorage.removeItem('cart');
    }
    window.addEventListener('beforeunload', clearCartItems);
   
    
    updateCartDisplay();
});

