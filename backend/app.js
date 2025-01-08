require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const accountRoutes = require('./routes/AccountRoutes')
const recipeRoutes = require('./routes/RecipeRoutes')

const app = express();
const db = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@recipestorage.bkbgt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=RecipeStorage`;

mongoose.connect(db)
    .then(() => app.listen(3000))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Server On"); 
});  

app.use(accountRoutes);
app.use(recipeRoutes);