const { verifyToken } = require('../utils/jwt')


const authUser = (req, res, next)=>{

    const token = req.header('Authorization')

    if(!token){
        return res.status(400).json({
            errors:{
                body:"Authorization Failed, login again"
            }
        })
    }
    
    verifyToken(token)
    .then(user =>{

        if(!user)
            return res.status(400).json({
                errors:{
                    body:"Authorization Failed, login again"
                }
            })
        req.user = user
        req.user.token = token
        next()
    
    }, err => next(new Error("Authorization Failed, login again")))

}


module.exports = {
    authUser
}