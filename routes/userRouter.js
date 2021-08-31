const router = require('express').Router();

router.use('/', (req, res, err)=>{

    res.json("Hello from user")
})

module.exports = router