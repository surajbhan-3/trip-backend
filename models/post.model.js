const mongoose = require("mongoose");


const postSchema = mongoose.Schema({

       name : {type:String, required:true},
       email : {type:String, required:true},
       destination : {type:String, required:true},
       travelers: {type:Number, required:true},
       budget:{type:Number, required:true}
})

const PostModel = mongoose.model("tripe", postSchema);


module.exports = { PostModel }