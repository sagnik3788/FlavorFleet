const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const fetch = require('node-fetch');
const path=require('path')
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/dish', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/templates/dish.html'));
});


app.get('/dish/:id', async (req, res) => {
    const dishId = req.params.id;

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
