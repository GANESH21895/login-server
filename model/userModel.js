const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,  
    },
    password: {
        type: String,
        required: true,
    },
    profileImage : {
        type : String,
        default : 'nil'
    }
},{timestamps:true})

//model to access schema
const User = mongoose.model('User',userSchema)
module.exports = User;