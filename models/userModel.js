const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        required: [true, "Email is required"],
        trim: true,
        unique:true
    },
    username:{
        type:String,
        required:[true, "Username is required"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    bio:{
        type: String, 
        required:false
    },
    image:{
        type:String,
        required:false
    }
    
},{
    timestamps:true,
    collection:"User"
})

module.exports = mongoose.model("User", UserSchema)