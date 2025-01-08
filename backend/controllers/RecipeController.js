const Recipe = require('../models/Recipe');

module.exports.createrecipe_post = async (req, res) => {
    let new_recipe = new Recipe(req.body);
    
    try {
        let result = await new_recipe.save();
        res.status(200).json({message: `${req.body.title} Added To Database!`});
    } catch (err) {
        res.status(400).json({error_message: err.message});
    }
} 

// getting a specific recipe using object id
module.exports.findrecipe_get = async (req, res) => {
    try {
        let found = await Recipe.findById(req.params.recipeID);
        
        if (!found) {
            return res.status(404).json({error_message: 'Error: Recipe Not Found'});
        }
        res.status(200).json(found);
    } catch (err) {
        res.status(400).json({error_message: 'Error: ' + err.message});
    }
}

// getting all recipes of a specifc account
module.exports.getrecipes_get = async (req, res) => {
    try {
        let result = await Recipe.find({owner: req.params.username});

        res.status(200).json({recipes: result});
    } catch (err) {
        res.status(400).json({error_message: 'Error: ' + err.message});
    }
}

module.exports.updaterecipe_post = async (req, res) => {
    try {
        const {_id, title, owner, time, ingredients, directions, tags} = req.body;
        const updatedData = {title, owner, time, ingredients, directions, tags};

        let updated = await Recipe.findByIdAndUpdate(_id, updatedData, {new: true} );

        if (!updated) {
            return res.status(404).json({error_message: "Recipe Not Found"});
        }
        res.status(201).json(updated);
    } catch (err) {
        res.status(400).json({error_message: 'Error: ' + err.message});
    } 
}

module.exports.deleterecipe_delete = async (req, res) => {
    try {
        let deleted = await Recipe.findByIdAndDelete(req.body.recipeID);

        if (deleted) {
            return res.status(200).json({message: `${deleted.title} Deleted`});
        } else {
            return res.status(404).json({error_message: "Error: Recipe Not Found"});
        }
    } catch (err) {
        res.status(400).json({error_message: `Error: ${err.message}`});
    }
}