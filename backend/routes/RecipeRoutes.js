const { Router } = require('express');
const recipeController = require('../controllers/RecipeController');
const router = Router();

router.post('/createrecipe', recipeController.createrecipe_post);

router.get('/findrecipe/:recipeID', recipeController.findrecipe_get);
router.get('/getrecipes/:username', recipeController.getrecipes_get);

router.post('/updaterecipe', recipeController.updaterecipe_post);

router.delete('/deleterecipe', recipeController.deleterecipe_delete);

module.exports = router;  