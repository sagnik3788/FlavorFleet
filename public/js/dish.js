document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.menu_btn');
    const dishName = document.getElementById('dish-name');
    const dishDescription = document.getElementById('dish-description');
    const dishImage = document.getElementById('dish-image');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("Button clicked!"); // Debugging line
            const foodId = button.getAttribute('data-food-id');
            const foodDetails = getFoodDetails(foodId);

            if (foodDetails) {
                //for debugging 
                console.log(foodDetails)
               console.log(foodDetails.description)
                console.log(foodId);

                dishName.textContent = foodDetails.name;
                dishDescription.textContent = foodDetails.description;
                dishImage.src = foodDetails.image;
            
            } else {
                console.error(`Food details not found for ID: ${foodId}`);
            }
        });
    });

    function getFoodDetails(foodId) {
        const foodData = {
            food1: {
                name: 'Delicious Burger',
                description: 'A mouthwatering burger made with premium ingredients.',
                image: "/image/menu_1.jpg"
            },
            food2: {
                name: 'Drink',
                description: 'A mouthwatering burger made with premium ingredients.',
                image: "/image/menu_2.jpg"
            },
            // Add more food items here
        };
        return foodData[foodId];
    }
});
