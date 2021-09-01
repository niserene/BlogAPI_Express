const usersController = require('../controllers/usersController');
const { authUser } = require('../middlewares/auth');

const router = require('express').Router();


// GET /user                  Get the current User
router.get('/', authUser, usersController.getUserByEmail)

// PATCH /user                Update the User data
router.patch('/', authUser, usersController.updateUser)

module.exports = router