const router = require('express').Router();
const userRouter = require('./usersRouter')
const articlesRouter = require('./articlesRouter')

router.use('/users', userRouter)
router.use('/articles', articlesRouter)


module.exports = router;