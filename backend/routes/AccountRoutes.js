const { Router } = require('express');
const accountController = require('../controllers/AccountController');
const router = Router();

router.post('/create', accountController.createaccount_post);
router.post('/login', accountController.findaccount_post);

module.exports = router; 