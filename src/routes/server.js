const express =require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const fetch= require('node-fetch'); 

app.use(bodyParser.json())
app.use(express.static('public'))

//routes

app.get('/dish/:id', async (req, res) => {
    const dishId = req.params.id;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`);
        const data = await response.json();
        const meal = data.meals[0];

        
        const dish = {
            id: dishId,
            name: meal.strMeal,
            image: meal.strMealThumb,
        };

        res.json(dish);
    } catch (error) {
        console.log('An error occurred while fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});





app.post('/cart',(req,res)=>{
    const dishId=req.body.dishId;
    res.json({ message: 'Dish added to cart' });
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
