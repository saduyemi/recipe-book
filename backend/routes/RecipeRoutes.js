const { Router } = require('express');
const recipeController = require('../controllers/RecipeController');
const router = Router();

router.post('/createrecipe', recipeController.createrecipe_post);

module.exports = router;  