const Recipe = require('../models/Recipe');

module.exports.createrecipe_post = async (req, res) => {
    //const {title, time, ingredients, directions, tags} = req.body;

    let new_recipe = new Recipe(req.body);
    
    try {
        let result = await new_recipe.save();
        res.status(200).json({message: `${req.body.title} Added To Database!`});
    } catch (err) {
        res.status(400).json({error_message: err.message});
    }
} 