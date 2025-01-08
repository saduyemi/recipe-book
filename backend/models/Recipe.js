const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    time : {
        type: String, 
        required: true
    }, 
    ingredients : {
        type: [String], 
        required: true
    },
    directions : {
        type: [[String]], // Each element should be a tuple, ex: {[45-sec, beat eggs], [-1, mix eggs, powder, & sugar], [2-min, fry one side of pancake],...., [5-sec, let it cool]} 
        required: true
    },
    tags : {
        type: [String]
    }
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema, 'Recipes');
module.exports = Recipe;