const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({

    slug:{
        type: String
    },
    title:{
        type:String,
        default:"Unknown_title"
    },
    description:{
        type:String,
        default:"Unknown_ description"
    },
    body:{
        type:String,
        default:"Unknown_body"
    },
    tagList:{
        type:[String]
    },
    favorited:{
        type:Boolean,
        default:false
    },
    favouritesCount:{
        type:Number,
        default:0
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }


},{
    timestamps:true,
    collection:"Article"
})


module.exports = mongoose.model("Article", ArticleSchema);