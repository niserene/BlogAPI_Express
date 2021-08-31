const router = require('express').Router();

router.get('/', (req, res, err)=>{

    res.json("Hello from articles ");
})

module.exports = router