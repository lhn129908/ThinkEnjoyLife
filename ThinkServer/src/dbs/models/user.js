const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    tel: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    headPortrait: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("User", UserSchema)