const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true,
        trim: true,
        unique:true
    },
    username:{
        type:String,
        required:[true, "Username is required"],
        trim:true
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    bio:{
        type: String, 
        required:false
    },
    image:{
        type:String,
        required:false
    },
    role:{
        type:Number,
        default:0
    },
    followers:{
        type:[]
    },
    following:{
        type:[]
    },
    articles:{
        
    }
},{
    timestamps:true,
    collection:"User"
})

module.exports = mongoose.model("User", UserSchema)