const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello There!")
});

app.listen(3000, () => {
    console.log("Node App is runnin on port 3000");
})