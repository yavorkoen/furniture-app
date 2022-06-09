const router = require('express').Router();
const userController = require('./controllers/userController.js');
const catalogController = require('./controllers/catalogController.js');

router.use('/users', userController);
router.use('/data/catalog', catalogController)

module.exports = router;