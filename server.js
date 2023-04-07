const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("Hello There!")
});

app.get('/blog', (req, res) => {
    res.send('Hello Blog! My name is BuraxTA!');
})

//Read
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Read by ID
app.get('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Create
app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//Update
app.put('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        //if we cannot find any product in db
        if (!product) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//delete
app.delete('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})





mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected");
    app.listen(3000, () => {
        console.log("Node App is runnin on port 3000");
    })
}).catch((error) => {
    console.log(error);
})