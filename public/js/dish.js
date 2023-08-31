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

const stars = document.querySelectorAll(".fa-star");
const rating = document.querySelector("#rating");

const ratingValue = Math.floor(Math.random() * 5) + 1;

for (let i = 0; i < stars.length; i++) {
  if (i <= ratingValue) {
    stars[i].style.color = "#f5d60a";
  } else {
    stars[i].style.color = "gray";
  }
}



document.addEventListener('DOMContentLoaded', async function () {
    const dishname = document.getElementById('dish-name');
    const dishpic = document.getElementById('dish-image');
    const dishlocation = document.getElementById('dish-location');
    const addToCartButton = document.getElementById("add-to-cart");
    
    const urlParams = new URLSearchParams(window.location.search);
    const foodId = urlParams.get('id');
  
    if (foodId) {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
          const data = await response.json();
       
        
        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];
          
          console.log(meal); 
  
          const dishName = document.createElement('h1');
          dishName.textContent = meal.strMeal;
  
          const dishImage = document.createElement('img');
          dishImage.src = meal.strMealThumb;
          dishImage.alt = meal.strMeal;
  
         const dishLocation=document.createElement('h2');
         dishLocation.textContent=meal.strArea;

          dishname.appendChild(dishName);
          dishpic.appendChild(dishImage);
          dishlocation.appendChild(dishLocation)


          addToCartButton.addEventListener('click', function () {
            const selectedItem = {
                name: dishName.textContent, 
                image: dishImage.src, 
                description: dishLocation.textContent 
            };
    
            
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
            
            cartItems.push(selectedItem);
    
            
            localStorage.setItem('cart', JSON.stringify(cartItems));
    
            alert('Item added to cart.');
        });  
        } 
  
 else {
console.log('No meal data found');
}
} catch (error) {
console.log('An error occurred while fetching data:', error);
}
}
});

  
  