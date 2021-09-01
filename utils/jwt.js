const jwt = require('jsonwebtoken')

require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

function getToken(user){

    return new Promise((resolve, reject)=>{
        
        jwt.sign({
            username:user.username,
            email: user.email
        },JWT_SECRET, {expiresIn:'5d'},(err, encoded)=>{
            
            if(err)
                return reject(err)
            else
                resolve(encoded)
        })
    
    })
}

function verifyToken(token){

    return new Promise((resolve, reject) => {

        jwt.verify(token, JWT_SECRET, (err, encoded) => {

            if(err)
                return reject(err)
            else
                resolve({
                    email:encoded.email,
                    username:encoded.username
                })

        })

    })
}


module.exports = {
    getToken,
    verifyToken
}