const mongoose = require('mongoose');
const { Schema } = mongoose;
const PostsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description:{
        type : String,
        require : true
    },
    date:{
        type : Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Posts", PostsSchema)