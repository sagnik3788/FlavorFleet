const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");

const bodyParser = require('body-parser');
const fetch = require('node-fetch');
app.use(bodyParser.json());
app.use(express.static('public'));

const publicpath = path.join(__dirname, "..", "..", "public"); 

app.use(express.static(path.join(__dirname, "public")));

console.log(publicpath);
app.use(express.static(publicpath));

app.get("/", (req, res)=>{
  res.sendFile(path.join(publicpath, "templates/login.html"));  
});


app.get("/help", (req, res) => {
 res.sendFile(path.join(publicpath, "templates/help.html"));

});


app.get("/search", (req, res) => {
  res.sendFile(path.join(publicpath, "templates/search.html"));
});


app.get("/Home", (req, res) => {
  res.sendFile(path.join(publicpath,  "templates/Home.html"));
});

app.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(publicpath,  "templates/forgot-password.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(publicpath, "templates/cart.html"));
});




// Routes
app.get('/dish', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/templates/dish.html'));
});


app.get('/dish/:id', async (req, res) => {
    const dishId = req.params.id

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`);
        const data = await response.json();
        
        if (data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            
            const dish = {
                id: dishId,
                name: meal.strMeal,
                image: meal.strMealThumb,
            };
    
            res.json(dish);
        } else {
            res.status(404).json({ error: 'Dish not found' });
        }
    } catch (error) {
        console.log('An error occurred while fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

