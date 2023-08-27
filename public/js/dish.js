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
        // const response = await fetch(`/dish/${foodId}`); 
        // const data = await response.json();
        // const response = await fetch(`http://127.0.0.1:5000/dish/${foodId}`);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
          const data = await response.json();
       
          console.log(data); // Check the data in the console

         const dishName = document.createElement('h1');
         dishName.textContent = data.name; 

const dishImage = document.createElement('img');
dishImage.src = data.image;
dishImage.alt = data.name; 

        
        dishDetails.appendChild(dishName);
        dishDetails.appendChild(dishImage);
        // dishDetails.appendChild(dishDescription);
        
      } catch (error) {
        console.log('An error occurred while fetching data:', error);
      }
    }
  });

  