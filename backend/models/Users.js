const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    displayPicture: {
        type: String,
        default: '/default-avatar.png'
    },
    bio: {
        type: String
    }
}, {
    timestamps: true
});
const User = mongoose.model('user', UserSchema);
module.exports = User