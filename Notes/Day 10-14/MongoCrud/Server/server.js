const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { UserModel, UserModel1} = require('./models/Users');

mongoose.connect("mongodb://127.0.0.1:27017/Crud")


const app = express();
const port = 3551;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/Createuser", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.post("/emp1", (req, res) => {
    UserModel1.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});