const bcrypt = require('bcrypt')

const SALT_ROUNDS = 12

function hashPassword(password){

    return new Promise((resolve, reject)=>{

        bcrypt.hash(password, SALT_ROUNDS, (err, encrypted)=>{
            if(err) return reject(err)
            resolve(encrypted)
        })
    })
}

function matchPassword( hashPass, password){

    return new Promise((resolve, reject)=>{

        bcrypt.compare(password, hashPass, (err, encrypted)=>{
            if(err)
                reject(err)
            else
            resolve(encrypted)
        })
    })
}


module.exports = {
    hashPassword, 
    matchPassword
}