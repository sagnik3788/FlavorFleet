const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose')  
const cors =require("cors")

const app = express();
const PORT = 4001;
app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('MongoDB connection error:', error);
});

//load user model
const User = require('./models/user');

// Register user
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).send('complete');
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send('Registration failed');
    }
});

// Login user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // const token = jwt.sign({ email: user.email }, 'secret_key');
    
        const token = jwt.sign({
            userId: user.id,
            email: user.email,
        }, 'secret', {
            expiresIn: '1h',
        });

        res.status(200).json({ token }); 
    } catch (error) {
        console.log('Login error:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});