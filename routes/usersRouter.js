const router = require('express').Router();
const usersController = require('../controllers/usersController')


// POST /users/login       Login a new User
router.post('/login', usersController.loginUser);

//Post /users              Register a new User
router.post('/', usersController.createUser);


module.exports = router