const User = require('../models/userModel')
const validateEmail = require('../utils/email')
const { hashPassword, matchPassword } = require('../utils/password')
const { getUser } = require('../utils/security')
const { getToken } = require('../utils/jwt')

const usersController = {

    createUser: (req, res, next)=>{

        if(!(req.body.user))
            return next(new Error("Invalid data sequence hai chutiye"))
        
        const {username, email, password} = req.body.user 
        
        if(!username || !email || !password)
            return next(new Error("All Fields of data is Compulsory"))

        if(!validateEmail(email))
            return next(new Error("Invalid Email"))
        
        User.findOne({email})
        .then(user =>{
        
            if(user){
                return next(new Error("User already exists"))
            }
            
            hashPassword(password)
            .then(passHash=>{

                User({
                    username, 
                    email, 
                    password:passHash
                }).save()
                .then(user => {
                    
                    getToken(user)
                    .then( token => {
                    
                        user.token = token
                        return res.status(200).json({'user':getUser(user)})
                    
                    }, e => next(e))
                
                }, e=> next(e))
            }, e=> next(e))
        }, e => {
            return next(new Error("Could not Create User"))
        })
    },

    loginUser: (req, res, next)=>{

        if(!req.body.user)
            return res.status(400).json(resErr("Invalid data Sequence"))
        const {email, password} = req.body.user

        if(!email || !password)
            return next(new Error("Invalid data"))

        User.findOne({email})
        .then( user => {

            if(!user)
                return next(new Error("No Such Email ID User Exists"));
            
            matchPassword(user.password, password)
            .then(result => {
                
                if(!result)
                    return next(new Error("Wrong Password"))
                
                getToken(user)
                .then(token => {
                    
                    user.token = token;
                    
                    return res.json({'user':getUser(user)})
                })
                
            }, err =>{
                return next(new Error("Invalid Credentials"))
            })

        }, err => next(err))
    }

}


function resErr(err){
    return {
        errors:{
            body: err
        }
    }
}

module.exports = usersController