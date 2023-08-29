const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose')  
const cors =require("cors")

const app = express();
const PORT = 4000;
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
    const user = await User.findOne({ email: req.body.email });
    if (user == null) {
        return res.status(400).send('Cannot find user');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ email: user.email }, 'secret_key');
            res.json({ token });
        } else {
            res.status(401).send('Authentication failed');
        }
    } catch {
        res.status(500).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
