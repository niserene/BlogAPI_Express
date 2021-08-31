const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({



},{
    timestamps:true,
    collection:"Comment"
})


module.exports = mongoose.model("Comment", CommentSchema);