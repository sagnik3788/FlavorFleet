// document.addEventListener('DOMContentLoaded', function() {
//     const orderButtons = document.querySelectorAll('.menu_btn');
//     const dishName = document.getElementById('dish-name');
//     const dishDescription = document.getElementById('dish-description');
//     const dishImage = document.getElementById('dish-image');

//     orderButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             console.log("Button clicked!"); // Debugging line
//             const foodId = button.getAttribute('data-food-id');
//             const foodDetails = getFoodDetails(foodId);

//             if (foodDetails) {
//                 //for debugging 
//                 console.log(foodDetails)
//                console.log(foodDetails.description)
//                 console.log(foodId);

//                 dishName.textContent = foodDetails.name;
//                 dishDescription.textContent = foodDetails.description;
//                 dishImage.src = foodDetails.image;
            
//             } else {
//                 console.error(`Food details not found for ID: ${foodId}`);
//             }
//         });
//     });

//     function getFoodDetails(foodId) {
//         const foodData = {
//             food1: {
//                 name: 'Delicious Burger',
//                 description: 'A mouthwatering burger made with premium ingredients.',
//                 image: "/image/menu_1.jpg"
//             },
//             food2: {
//                 name: 'Drink',
//                 description: 'A mouthwatering burger made with premium ingredients.',
//                 image: "/image/menu_2.jpg"
//             },
//             // Add more food items here
//         };
//         return foodData[foodId];
//     }
// });

document.addEventListener('DOMContentLoaded', async function () {
    const dishDetails = document.getElementById('dish-details');
    
    const urlParams = new URLSearchParams(window.location.search);
    const foodId = urlParams.get('id');
  
    if (foodId) {
      try {
        const response = await fetch(`/dish/${foodId}`); 
        const data = await response.json();
        const dishName = document.createElement('h1');
        dishName.textContent = data.strMeal; 
        
        const dishImage = document.createElement('img');
        dishImage.src = data.strMealThumb;
        dishImage.alt = data.strMeal; 
        
        // const dishDescription = document.createElement('p');
        // dishDescription.textContent = `Price: $${data.price}, Ratings: ${data.ratings.join(', ')}`;
        
        dishDetails.appendChild(dishName);
        dishDetails.appendChild(dishImage);
        // dishDetails.appendChild(dishDescription);
        
      } catch (error) {
        console.log('An error occurred while fetching data:', error);
      }
    }
  });

  